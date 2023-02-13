module.exports = {
    stories: [
        '../../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        {
            name: '@storybook/addon-essentials',
            options: {
                backgrounds: false,
            },
        },
        '@storybook/addon-interactions',
        'storybook-addon-mock',
        'storybook-addon-themes',
    ],
    framework: '@storybook/react',
    core: {
        builder: 'webpack5',
    },
    themes: {
        default: 'light',
        list: [
            { name: 'light', class: 'theme-light', color: '#ffffff' },
            { name: 'dark', class: 'theme-dark', color: '#000000' },
            { name: 'orange', class: 'theme-orange', color: '#ffb005' },
        ],
    },
};
