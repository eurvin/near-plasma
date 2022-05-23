# near-plasma
A NEAR smart contract for streaming payments. With NEAR Plasma individuals, DAO's and other entities may create a payment streams which the receiver can settle instantly over time.
This gives the following possib

## Concept
This smart contract enables the user to deposit money into a vault. When the vaults' balance has sufficiently been filled, a payment stream can be created and started.
The payment stream is basically a record of a settlement amount and deadline, using a constant stream rate of (yocto)NEAR per second.

This empowers the user, both sender and receiver, with the flexibility to settle any amount of (yocto)NEAR owed to the receiver at any time point in time.

## User Story
Alice and Bob have client-freelancer relationship. Bob will be working for Alice exclusively for the next six months.
Alice has a habit of being late with payment, therefore Bob suggests the use of NEAR Plasma to receive a continuous stream of payments which he can settle at his own discretion. 
Alice wants to send

### Installation
Run `npm install --ignore-scripts`

### commands

## Glossary
| word            | short description                                                         |
|-----------------|---------------------------------------------------------------------------|
| **NEAR Plasma** | A smart contract that enables streaming payments                          |
| vault           | A record in the smart contract/escrow that safely manages sender balances |
| stream          | A record of a payment obligation from sender to receiver over time        |
| owner           | The owner of a vault                                                      |
| sender          | The sender and initiator of a payment stream                              |
| eeceiver        | The receiver of a payment stream                                          |


