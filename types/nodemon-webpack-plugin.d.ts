declare module 'nodemon-webpack-plugin' {
  interface IPluginOptions {
    ext: string;
    script: string;
    watch: string;
  }
  class NodemonPlugin {
    constructor (options: IPluginOptions);
  }
  export = NodemonPlugin;
}
