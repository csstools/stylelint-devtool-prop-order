export interface OrderGroup {
	groupName: string
	emptyLineBefore: 'always'
	properties: string[]
}

export type Order = OrderGroup[]

export declare const order: Order
