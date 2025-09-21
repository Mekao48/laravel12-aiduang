import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../wayfinder'
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:20
 * @route '/login'
 */
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:20
 * @route '/login'
 */
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:20
 * @route '/login'
 */
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:20
 * @route '/login'
 */
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:20
 * @route '/login'
 */
    const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: login.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:20
 * @route '/login'
 */
        loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:20
 * @route '/login'
 */
        loginForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    login.form = loginForm
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::logout
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:54
 * @route '/logout'
 */
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::logout
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:54
 * @route '/logout'
 */
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::logout
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:54
 * @route '/logout'
 */
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::logout
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:54
 * @route '/logout'
 */
    const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: logout.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::logout
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:54
 * @route '/logout'
 */
        logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: logout.url(options),
            method: 'post',
        })
    
    logout.form = logoutForm
/**
 * @see routes/web.php:14
 * @route '/'
 */
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:14
 * @route '/'
 */
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:14
 * @route '/'
 */
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:14
 * @route '/'
 */
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:14
 * @route '/'
 */
    const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: home.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:14
 * @route '/'
 */
        homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:14
 * @route '/'
 */
        homeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    home.form = homeForm
/**
 * @see routes/web.php:19
 * @route '/dashboard'
 */
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:19
 * @route '/dashboard'
 */
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:19
 * @route '/dashboard'
 */
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:19
 * @route '/dashboard'
 */
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:19
 * @route '/dashboard'
 */
    const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dashboard.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:19
 * @route '/dashboard'
 */
        dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:19
 * @route '/dashboard'
 */
        dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    dashboard.form = dashboardForm
/**
* @see \App\Http\Controllers\Auth\RegisteredUserController::register
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:21
 * @route '/register'
 */
export const register = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

register.definition = {
    methods: ["get","head"],
    url: '/register',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\RegisteredUserController::register
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:21
 * @route '/register'
 */
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\RegisteredUserController::register
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:21
 * @route '/register'
 */
register.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Auth\RegisteredUserController::register
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:21
 * @route '/register'
 */
register.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: register.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Auth\RegisteredUserController::register
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:21
 * @route '/register'
 */
    const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: register.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Auth\RegisteredUserController::register
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:21
 * @route '/register'
 */
        registerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: register.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Auth\RegisteredUserController::register
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:21
 * @route '/register'
 */
        registerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: register.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    register.form = registerForm
/**
 * @see routes/web.php:93
 * @route '/active/index'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/active/index',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:93
 * @route '/active/index'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:93
 * @route '/active/index'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:93
 * @route '/active/index'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:93
 * @route '/active/index'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:93
 * @route '/active/index'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:93
 * @route '/active/index'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
 * @see routes/web.php:97
 * @route '/active/about'
 */
export const about = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: about.url(options),
    method: 'get',
})

about.definition = {
    methods: ["get","head"],
    url: '/active/about',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:97
 * @route '/active/about'
 */
about.url = (options?: RouteQueryOptions) => {
    return about.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:97
 * @route '/active/about'
 */
about.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: about.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:97
 * @route '/active/about'
 */
about.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: about.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:97
 * @route '/active/about'
 */
    const aboutForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: about.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:97
 * @route '/active/about'
 */
        aboutForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: about.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:97
 * @route '/active/about'
 */
        aboutForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: about.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    about.form = aboutForm
/**
 * @see routes/web.php:100
 * @route '/active/services'
 */
export const services = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: services.url(options),
    method: 'get',
})

services.definition = {
    methods: ["get","head"],
    url: '/active/services',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:100
 * @route '/active/services'
 */
services.url = (options?: RouteQueryOptions) => {
    return services.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:100
 * @route '/active/services'
 */
services.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: services.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:100
 * @route '/active/services'
 */
services.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: services.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:100
 * @route '/active/services'
 */
    const servicesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: services.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:100
 * @route '/active/services'
 */
        servicesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: services.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:100
 * @route '/active/services'
 */
        servicesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: services.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    services.form = servicesForm
/**
 * @see routes/web.php:103
 * @route '/active/portfolio'
 */
export const portfolio = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: portfolio.url(options),
    method: 'get',
})

portfolio.definition = {
    methods: ["get","head"],
    url: '/active/portfolio',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:103
 * @route '/active/portfolio'
 */
portfolio.url = (options?: RouteQueryOptions) => {
    return portfolio.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:103
 * @route '/active/portfolio'
 */
portfolio.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: portfolio.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:103
 * @route '/active/portfolio'
 */
portfolio.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: portfolio.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:103
 * @route '/active/portfolio'
 */
    const portfolioForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: portfolio.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:103
 * @route '/active/portfolio'
 */
        portfolioForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: portfolio.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:103
 * @route '/active/portfolio'
 */
        portfolioForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: portfolio.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    portfolio.form = portfolioForm
/**
 * @see routes/web.php:106
 * @route '/active/team'
 */
export const team = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: team.url(options),
    method: 'get',
})

team.definition = {
    methods: ["get","head"],
    url: '/active/team',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:106
 * @route '/active/team'
 */
team.url = (options?: RouteQueryOptions) => {
    return team.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:106
 * @route '/active/team'
 */
team.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: team.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:106
 * @route '/active/team'
 */
team.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: team.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:106
 * @route '/active/team'
 */
    const teamForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: team.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:106
 * @route '/active/team'
 */
        teamForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: team.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:106
 * @route '/active/team'
 */
        teamForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: team.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    team.form = teamForm
/**
 * @see routes/web.php:109
 * @route '/active/blog'
 */
export const blog = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: blog.url(options),
    method: 'get',
})

blog.definition = {
    methods: ["get","head"],
    url: '/active/blog',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:109
 * @route '/active/blog'
 */
blog.url = (options?: RouteQueryOptions) => {
    return blog.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:109
 * @route '/active/blog'
 */
blog.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: blog.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:109
 * @route '/active/blog'
 */
blog.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: blog.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:109
 * @route '/active/blog'
 */
    const blogForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: blog.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:109
 * @route '/active/blog'
 */
        blogForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: blog.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:109
 * @route '/active/blog'
 */
        blogForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: blog.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    blog.form = blogForm
/**
 * @see routes/web.php:112
 * @route '/active/contact'
 */
export const contact = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contact.url(options),
    method: 'get',
})

contact.definition = {
    methods: ["get","head"],
    url: '/active/contact',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:112
 * @route '/active/contact'
 */
contact.url = (options?: RouteQueryOptions) => {
    return contact.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:112
 * @route '/active/contact'
 */
contact.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contact.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:112
 * @route '/active/contact'
 */
contact.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: contact.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:112
 * @route '/active/contact'
 */
    const contactForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: contact.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:112
 * @route '/active/contact'
 */
        contactForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: contact.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:112
 * @route '/active/contact'
 */
        contactForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: contact.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    contact.form = contactForm
/**
 * @see routes/web.php:116
 * @route '/test'
 */
export const test = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: test.url(options),
    method: 'get',
})

test.definition = {
    methods: ["get","head"],
    url: '/test',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:116
 * @route '/test'
 */
test.url = (options?: RouteQueryOptions) => {
    return test.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:116
 * @route '/test'
 */
test.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: test.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:116
 * @route '/test'
 */
test.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: test.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:116
 * @route '/test'
 */
    const testForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: test.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:116
 * @route '/test'
 */
        testForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: test.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:116
 * @route '/test'
 */
        testForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: test.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    test.form = testForm
/**
 * @see routes/web.php:120
 * @route '/coronavirus'
 */
export const coronavirus = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: coronavirus.url(options),
    method: 'get',
})

coronavirus.definition = {
    methods: ["get","head"],
    url: '/coronavirus',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:120
 * @route '/coronavirus'
 */
coronavirus.url = (options?: RouteQueryOptions) => {
    return coronavirus.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:120
 * @route '/coronavirus'
 */
coronavirus.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: coronavirus.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:120
 * @route '/coronavirus'
 */
coronavirus.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: coronavirus.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:120
 * @route '/coronavirus'
 */
    const coronavirusForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: coronavirus.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:120
 * @route '/coronavirus'
 */
        coronavirusForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: coronavirus.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:120
 * @route '/coronavirus'
 */
        coronavirusForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: coronavirus.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    coronavirus.form = coronavirusForm
/**
 * @see routes/web.php:177
 * @route '/barchart'
 */
export const barchart = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: barchart.url(options),
    method: 'get',
})

barchart.definition = {
    methods: ["get","head"],
    url: '/barchart',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:177
 * @route '/barchart'
 */
barchart.url = (options?: RouteQueryOptions) => {
    return barchart.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:177
 * @route '/barchart'
 */
barchart.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: barchart.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:177
 * @route '/barchart'
 */
barchart.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: barchart.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:177
 * @route '/barchart'
 */
    const barchartForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: barchart.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:177
 * @route '/barchart'
 */
        barchartForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: barchart.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:177
 * @route '/barchart'
 */
        barchartForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: barchart.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    barchart.form = barchartForm
/**
* @see \App\Http\Controllers\NewsController::news
 * @see app/Http/Controllers/NewsController.php:16
 * @route '/news'
 */
export const news = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: news.url(options),
    method: 'get',
})

news.definition = {
    methods: ["get","head"],
    url: '/news',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NewsController::news
 * @see app/Http/Controllers/NewsController.php:16
 * @route '/news'
 */
news.url = (options?: RouteQueryOptions) => {
    return news.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NewsController::news
 * @see app/Http/Controllers/NewsController.php:16
 * @route '/news'
 */
news.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: news.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\NewsController::news
 * @see app/Http/Controllers/NewsController.php:16
 * @route '/news'
 */
news.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: news.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\NewsController::news
 * @see app/Http/Controllers/NewsController.php:16
 * @route '/news'
 */
    const newsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: news.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\NewsController::news
 * @see app/Http/Controllers/NewsController.php:16
 * @route '/news'
 */
        newsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: news.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\NewsController::news
 * @see app/Http/Controllers/NewsController.php:16
 * @route '/news'
 */
        newsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: news.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    news.form = newsForm
/**
* @see \App\Http\Controllers\NewsController::news_detail
 * @see app/Http/Controllers/NewsController.php:83
 * @route '/news/{id}'
 */
export const news_detail = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: news_detail.url(args, options),
    method: 'get',
})

news_detail.definition = {
    methods: ["get","head"],
    url: '/news/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NewsController::news_detail
 * @see app/Http/Controllers/NewsController.php:83
 * @route '/news/{id}'
 */
news_detail.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return news_detail.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NewsController::news_detail
 * @see app/Http/Controllers/NewsController.php:83
 * @route '/news/{id}'
 */
news_detail.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: news_detail.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\NewsController::news_detail
 * @see app/Http/Controllers/NewsController.php:83
 * @route '/news/{id}'
 */
news_detail.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: news_detail.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\NewsController::news_detail
 * @see app/Http/Controllers/NewsController.php:83
 * @route '/news/{id}'
 */
    const news_detailForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: news_detail.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\NewsController::news_detail
 * @see app/Http/Controllers/NewsController.php:83
 * @route '/news/{id}'
 */
        news_detailForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: news_detail.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\NewsController::news_detail
 * @see app/Http/Controllers/NewsController.php:83
 * @route '/news/{id}'
 */
        news_detailForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: news_detail.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    news_detail.form = news_detailForm