export const indexInterestingLands = (prop) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        prop,
        data: {
          result: true,
          lands: {
            withProjects: [],
            withPoaps: [],
            auctionStarted: [],
            auctionClosing: [],
            minted: [],
            onSale: [],
            user: {
              auction_started: [],
              auction_closing: [],
              minted: [],
            },
          },
        },
      })
      reject('error')
    }, 300)
  })
