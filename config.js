module.exports = {
  // App Settings
  MONGO_URI: process.env.MONGO_URI || 'localhost:27017',
  TOKEN_SECRET: process.env.TOKEN_SECRET || 'YOUR_UNIQUE_JWT_TOKEN_SECRET',

  // OAuth 2.0
  FACEBOOK_SECRET: process.env.FACEBOOK_SECRET || '52d6f3bdf62defff068a3ab2a0f0668b',
  GOOGLE_SECRET: process.env.GOOGLE_SECRET || 'WFesXuiI41byJxStkVSVF3I9'
};
