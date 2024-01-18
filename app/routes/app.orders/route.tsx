import type {LoaderFunctionArgs} from '@remix-run/node';

import {json} from '@remix-run/node';
import {useLoaderData} from '@remix-run/react';
import {Card, IndexTable, Layout, Page} from '@shopify/polaris';
import {authenticate} from '~/shopify.server';

export async function loader({request}: LoaderFunctionArgs) {
  const {admin, session} = await authenticate.admin(request);
  const orders = await admin.rest.resources.Order.all({session, status: 'any'});
  return json({orders});
}

export default function Orders() {
  const {orders} = useLoaderData<typeof loader>();

  return (
    <Page>
      <ui-title-bar title="Orders" />
      <Layout>
        <Layout.Section>
          <Card>
            {orders.data.map((order) => (
              <IndexTable
                key={order.id}
                itemCount={orders.data.length}
                selectedItemsCount={0}
                onSelectionChange={() => {}}
                headings={[{title: 'Order'}, {title: 'Date'}, {title: 'Status'}]}
              >
                <IndexTable.Row id={order.id} selected={false} position={0}>
                  <IndexTable.Cell>{order.name}</IndexTable.Cell>
                  <IndexTable.Cell>{order.created_at}</IndexTable.Cell>
                  <IndexTable.Cell>{order.fulfillment_status ?? 'Unfulfilled'}</IndexTable.Cell>
                </IndexTable.Row>
              </IndexTable>
            ))}
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
