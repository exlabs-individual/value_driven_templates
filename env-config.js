const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BACKEND_URL': prod ? '/value_driven_templates' : '',
  'process.env.ASSET_PREFIX': '/value_driven_templates',
};
