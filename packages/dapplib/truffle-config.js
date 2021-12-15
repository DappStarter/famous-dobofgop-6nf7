require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena forward turtle crazy rate rural evil grid derive swing gauge'; 
let testAccounts = [
"0x05bb7b6e30d2c7bd5dcb8d698a1789eaf25d5ddbc34f2117438eaf041423f95b",
"0xc7396e2dc4d2d6d54dbbffe85789e484c81c0df18de20df8d9ab442864331ae1",
"0x4a1cc406ada9671a88b64bbba8d71dd3dfdb1afca1cc737c2461355b22d7a17a",
"0xa6e7ce5d26086f80ef99062b1f9948b31169ad4405786e2b277c9c16ce75327c",
"0x42c99a037678449f81e0b5a5d1278a9d618e31c1dd22618f5fe0a5a5a5baf33a",
"0x6e053c219a4add988e27d1eb08c6de946c14ee830806b5f15db221ecb93cd71e",
"0x2f48bd9586e0f338141fe396920dbf59fd6ca4126e79c3bea665e135f4f2813d",
"0x8b34623bc8927a1cb58f16381eda1e9b0024e266759ebaec7cc3f8ffe38df8e1",
"0x6919535590cd3631c68dcbcb4696d5b6f1284d58d4db262d9b77dfb54b76c87d",
"0xeee7449546b27cd88ffa64e37b0d3f6d6225b6ebbe375374fa631d3d6eca04c7"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


