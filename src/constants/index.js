export const FACTORY_ADDRESS = '0xCe8fd65646F2a2a897755A1188C04aCe94D2B8D0'

export const BUNDLE_ID = '1'

export const timeframeOptions = {
  WEEK: '1 week',
  MONTH: '1 month',
  // THREE_MONTHS: '3 months',
  // YEAR: '1 year',
  ALL_TIME: 'All time'
}

// token list urls to fetch tokens from - use for warnings on tokens and pairs
export const SUPPORTED_LIST_URLS__NO_ENS = [
  'https://tokens.bollo.me/tokens.json'
]

// hide from overview list
export const OVERVIEW_TOKEN_BLACKLIST = [
  '0xc00af6212fcf0e6fd3143e692ccd4191dc308bea',
  '0x097e428494f5373f22679e68d1a1e50d0a507966',
  '0xab66473323db4ee3c6b2b0fa5e9f5c46a6acb2cc',
  '0x93cf3c9a9dc285af82db4c3a02f09765c22420db',
  '0x654456f62510eabf663515f5b7df93b096bb7042',
  '0x8191113581cbfa3fcdc6b0d2e6f84753d4850080',
  '0xd7dce5ac94535a85cf6a5054d4a014306f200256',
  '0x4cdd6316ef53fa5d90351655b35ebba0d10b65a7',
  '0xf1cb1a440f0f710c9c8d1855e4e11b06d4f0617b',
  '0x2ce0aceaa3ec46166b56ff4dfb4ef42d0084afab',
  '0x48d697c60424f2ee5d6bf92bfa5d83b6dbcb41b6',
  '0x2282d18c5232ac20a41c0a0709367becade2f751',
  '0x21f0894d3cbbc2cf40ad48da845f621e0212b0b2',
  '0x03b0beaf0e9b1006f4a084d6cb90b3f276b6d331',
  '0xd85306254363871718491629885ad55013543fc9',
  '0x2441fae7a7901e608e4cf66e2edb43fb43e01f1b',
  '0xff795d617a1d2aadaab7745d9626402680fa63a5',
  '0xc410b2c84ff954b5ee3dd1b0a0d3b4a8436e6e55',
  '0xe8c4b7a8b95e14981ca4e5fd53f7c219754e8392',
  '0x222d13dceb7820ae1e928a8c527c4f8e4c0ffa8b',
  '0x3d9bf3fddc3513bf103a70e9b499e99b99373dd2',
  '0x9c2d7c8231e00b8e99b24825b60bc4485e05208f',
]

// pair blacklist
export const PAIR_BLACKLIST = [
  '0x8fc8c3e3593f09698bad714d098ab77f13f214a7',
  '0x0cea0262ddce7e140666b1d29292b1293490e001',
  '0xd9a11da36d58f8bd6f62e399aa1686e59a107826',
  '0xb80ad32254a6e4f5b4a2e4bc47e5a6968e3a305b',
  '0x9d6af5ee257d400d9e09abf6f6790f312600a507',
  '0xe71b93dd975303ee09f04a7bb47fbb2a963523cf',
  '0x836c56e31a2644db352aeb7b02be2cfcb3a932bb',
  '0x64b0366ba79fbec70adb2fad2798aadf08468b15',
  '0x476f0ff325c0f788b3f4bb6fc59139bbf0ae64a7',
  '0xbcf0246364fe102dffdad929407d876620999885',
  '0x0c762d384f60c6bf4c9d2d833d4a0581752163aa',
  '0x889c86a45495c04de180379a84821d29eab4bda4',
  '0x9409f3ce6b1701f8a6df1b1b10345c38b6dd93c3',
  '0x6d61d063310956ba6922dcb30fdaa9eb9d91ac7b',
  '0x1b33bd7947c1181916b6fc3892cb7f1f08299f3b',
  '0x960c25bbee1549b29c5224cb8568d057cbde578d',
  '0x1b33bd7947c1181916b6fc3892cb7f1f08299f3b',
  '0xefdd942f7322d0ab091241cfadcd883485021e77',
  '0xdbb9c2f105ed338799561611647946e9ee1e9d9d',
  '0xe6dcb4cac22b4e591d6e5d8eeb61600a2158b1dc',
  '0x27c5b858807d42d7a835cfe6c00b8fe217947023',
  '0xdb740f15629d07086b13fab14e49a674721199ff',
  '0x9c79ad77194127148f1a7205c470e47988c0c119',
  '0x51c03563fad9a31bde556258d121d2c61ddcb670',
  '0xc9c1cdb1ad05900d3de6e627a555527eb5b57888',
  '0x0cf65da40aacaa60ec6d28eac4e778375308af49',
]

/**
 * For tokens that cause erros on fee calculations
 */
export const FEE_WARNING_TOKENS = []
