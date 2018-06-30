<h1 align="center">
  <br>
  <img src="https://github.com/MitchDorrestijn/coinmarketcap-icons/blob/master/readme_banner.png?raw=true" alt="Cryptocurrency icons">
  <br><br>
  coinmarketcap-icons
  <br>
</h1>

<h4 align="center">A simple script for downloading all cryptocurrency icons from CoinMarketCap</h4>

---

## Key Features

* Build with Node.js
* Downloads all icons in 16x16, 32x32, 64x64 or 128x128 pixels
* Names icons based on slug, ticker or rank
* Always gets the latest icons in .png format
* Super simple to run :wink:


## How To Use

To run this script, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/). Next open up your terminal and from your command line type:

```bash
# Clone the repo
$ git clone https://github.com/MitchDorrestijn/coinmarketcap-icons.git

# Go into the coinmarketcap-icons directory
$ cd coinmarketcap-icons

# Run the script
$ node index.js
```

By default, the script downloads all cryptocurrency icons from [CoinMarketCap](https://coinmarketcap.com/) in the format 128x128px with the slug as name. However, you can give a couple extra arguments to change this behaviour, like:

```bash
# Download all icons in 128x128px with the slug as name (default)
node index.js slug 128x128

# Download all icons in 64x64px with the slug as name
node index.js slug 64x64

# Download all icons in 32x32px with the slug as name
node index.js slug 32x32

# Download all icons in 16x16px with the slug as name
node index.js slug 16x16

# Download all icons in 128x128px with the ticker symbol as name
node index.js symbol 128x128

# Download all icons in 64x64px with the ticker symbol as name
node index.js symbol 64x64

# Download all icons in 32x32px with the ticker symbol as name
node index.js symbol 32x32

# Download all icons in 16x16px with the ticker symbol as name
node index.js symbol 16x16

# Download all icons in 128x128px with the rank number as name
node index.js rank 128x128

# Download all icons in 64x64px with the rank number as name
node index.js rank 64x64

# Download all icons in 32x32px with the rank number as name
node index.js rank 32x32

# Download all icons in 16x16px with the rank number as name
node index.js rank 16x16
```

The icons will be saved in the `icons` directory. If this directory doesn't exist the script will make one.

## Donations

If this script helped you out please consider a donation. Donations are used to pay for my education as a web developer.

- Bitcoin (BTC) `1Lawi284xuNSL2QPPnpeLp637oN74M7LCQ`
- Ethereum (ETH) `0x06DF41dE423167AD8D761AfBcbcb95D0508CF541`
- Litecoin (LTC) `LYjsYCTn1BgbXkGjizRiurjC4YMh2VZsF2`

Thanks in advance :blush:

## Legal

As stated in the [CoinMarketCap FAQ](https://coinmarketcap.com/faq/) it is allowed to use resources from the coinmarketcap.com website.

## Licence
MIT
