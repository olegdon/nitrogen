import type { CodegenConfig } from '@graphql-codegen/cli'

import dotenv from 'dotenv'

dotenv.config()

if (
  !process.env.NUXT_SHOPIFY_DOMAIN
  || !process.env.NUXT_SHOPIFY_API_VERSION
  || !process.env.NUXT_SHOPIFY_ADMIN_ACCESS_TOKEN
  || !process.env.NUXT_SHOPIFY_STOREFRONT_ACCESS_TOKEN
) {
  throw new Error(
    'Missing required Shopify environment variables for Codegen support.',
  )
}

export const adminApiSchema: CodegenConfig['schema'] = {
  [`https://${process.env.NUXT_SHOPIFY_DOMAIN}/admin/api/${process.env.NUXT_SHOPIFY_API_VERSION}/graphql.json`]:
    {
      headers: {
        'content-type': 'application/json',
        'X-Shopify-Access-Token': process.env.NUXT_SHOPIFY_ADMIN_ACCESS_TOKEN,
      },
    },
}

export const storefrontApiSchema: CodegenConfig['schema'] = {
  [`https://${process.env.NUXT_SHOPIFY_DOMAIN}/api/${process.env.NUXT_SHOPIFY_API_VERSION}/graphql.json`]:
    {
      headers: {
        'content-type': 'application/json',
        'X-Shopify-Storefront-Access-Token': process.env.NUXT_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
      },
    },
}
