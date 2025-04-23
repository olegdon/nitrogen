import type {
  LocalizationQuery,
  LocalizationQueryVariables,
} from '@@/types/shopify';

import { LOCALIZATION } from '../../graphql/queries/localization';
import { query } from '../../utils/graphql-client';

/**
 * Fetches localization data such as country and language settings.
 * @param options - The variables for the localization query (country, language)
 * @returns A Promise resolving to the localization data
 * @see https://shopify.dev/docs/api/storefront/2025-01/queries/localization
 */
export const get = async (
  options: LocalizationQueryVariables
): Promise<LocalizationQuery['localization']> => {
  const response = await query(LOCALIZATION, options);
  return response.data?.localization;
};

export default {
  get
};
