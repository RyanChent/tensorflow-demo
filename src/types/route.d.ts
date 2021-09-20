import React from 'react'

interface RouteMeta {
    title?: string,
    icon?: string,
    cache?: boolean,
    permission?: string[] | string
}

export interface RouteType {
    path: string,
    component: React.ComponentType,
    meta: RouteMeta,
    hidden?: boolean,
    [prop: string]: any
}