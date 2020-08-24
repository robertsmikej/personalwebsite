export const state = () => ({
    nav: [],
    sitewide: {
        nav: []
    },
    pages: {}
});

function sortItems(data) {
    let newdata = [];
    for (var d in data) {
        let item = data[d];
        if (item.status || item.status === 'true') {
            newdata.push(item);
        }
    }
    return newdata;
}
function isLive(data) {
    return data.status || data.status === 'true' ? true : false;
}

export const mutations = {
    setNav(state, data) {
        for (let item in data[0].nav_items) {
            state.nav.push(data[0].nav_items[item]);
        }
        state.sitewide.nav = state.nav;
    },
    setPages(state, data) {
        data.forEach(page => {
            if (isLive(page)) {
                state.pages[page.page_name] = page;
                
            }
        });
    }
};

export const getters = {
    nav: state => state.nav,
    sitewide: state => state.sitewide,
    pages: state => state.pages
};

export const actions = {
    async nuxtServerInit({ commit }) {
        const navfiles = await require.context('~/assets/content/nav/', false, /\.json$/);
        const nav = navfiles.keys().map(key => {
            let res = navfiles(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setNav', nav);

        const pagefiles = await require.context('~/assets/content/pages/', false, /\.json$/);
        const pages = pagefiles.keys().map(key => {
            let res = pagefiles(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setPages', pages);
    }
}