import "https://unpkg.com/vue/dist/vue.js"
import "https://unpkg.com/vue-router/dist/vue-router.js"

const welcome = Vue.component(
    'welcome', {
        template: 
        `<h1>Hello! Welcome to my website!</h1>`
    }
)

const login = Vue.component(
    'login', {
        template: `
        <form>
            <label for="email">Email</label>
            <input id="email" type="text">
            <label for="password">Password</label>
            <input id="password" type="text">
            <input type="button" value="Sign in">
        </form>
        `
    }
)

const signup = Vue.component(
    'login', {
        template: `
        <form>
            <label for="email">Email</label>
            <input id="email" type="text">
            <label for="password">Password</label>
            <input id="password" type="text">
            <label for="confirmPassword">Confirm Password</label>
            <input id="confirmPassword" type="text">
            <input type="button" value="Sign up">
        </form>
        `
    }
)

const siteMenu = Vue.component(
    'siteMenu', {
        template: `
        <div>
            <router-link to="/">Home</router-link>
            <router-link to="/">Sign Up</router-link>
            <router-link to="/">Log In</router-link>
        </div>
        `
    }
)

const myRouter = new VueRouter({
    routes: [
        { path: '/', component: welcome },
        { path: '/welcome', component: welcome },
        { path: '/login', component: login },
        { path: '/signup', component: signup },
    ]
    
 })

new Vue({
    el:'#app',
    template: `
    <div>
        <siteMenu></siteMenu>
        <transition name="mytransition" mode="out-in">
            <router-view></router-view>
        </transition>
        
    </div>
    `,
    router: myRouter
})