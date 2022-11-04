module.exports = {
    apps: [
        {
            name: 'reflex-front',
            exec_mode: 'cluster',
            instances: '2', // Or a number of instances
            script: './node_modules/nuxt/bin/nuxt.js',
            args: 'start',
            cwd: './current',
            autorestart: true,
            watch: false,
            max_memory_restart: '500M',
            listen_timeout: 25000,
            output: './console.log',
            error: './consoleError.log',
            env_production: {
                HOST: '0.0.0.0',
                PORT: 8090,
                NODE_ENV: 'production',
                DROP_CONSOLE: true,
                ORIGIN: 'http://reflex.financialiq.co.kr'
            },
            env_development: {
                HOST: '0.0.0.0',
                PORT: 3000,
                NODE_ENV: 'production',
                DROP_CONSOLE: true,
                ORIGIN: 'http://reflex-test.financialiq.co.kr'
            }
        }
    ]
}
