interface ReelandDetail  {
    id: string,
    xCoordinate: number,
    yCoordinate: number,
    price: number,
    isDisabled: boolean,
    description: boolean
}
interface ReelandDetail  {
    id: string,
    xCoordinate: number,
    yCoordinate: number,
    price: number,
    isDisabled: boolean,
    description: boolean
}

interface ReelandNotDisabled  {
    id: string,
    xCoordinate: number,
    yCoordinate: number,
    ownerId: string
}

/*
   GET REELANDS/PATCHAS BUYED
   Params: type:  reeland/patchas
   Response: ReelandNotDisabled[]
*/

/*
   GET REELANDS/PATCHAS DETAIL
   Params: reelandId, type: reeland/patchas
   Response: ReelandDetail
*/
/*
    BUY REELAND/ PATCHAS 
    BODY {
        id: string
        buyerId: string
    }
    
*/


