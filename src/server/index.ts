import * as WDS from 'webpack-dev-server';

const mode = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';

// tslint:disable-next-line:no-var-requires
const { config, compiler, wdsConfig } = require(`./webpack.${mode}.config`);

WDS.addDevServerEntrypoints(config, wdsConfig);

const server = new WDS(compiler, wdsConfig);

// tslint:disable:no-console
server.listen(8080, (e?: Error) => {
  if (e) {
    return console.log(e);
  }

  console.log(`App${wdsConfig.hot ? ' HOT ' : ' '}listening on 8080`);
  return null;
});
// tslint:enable:no-console
