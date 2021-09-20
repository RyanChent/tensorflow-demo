export interface ChartsProps {
    id: string,
    height: string | number,
    width: string | number,
    minWidth: string | number,
    minHeight: string | number,
    options?: ChartsOptions
}

export interface ChartsState extends ChartsProps {
    [prop: string]: unknown
}

interface ChartsOptions {
    [prop: string]: unknown
}