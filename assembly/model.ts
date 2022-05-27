import { PersistentUnorderedMap, u128, context } from "near-sdk-as";

@nearBindgen
export class Vault {
    id: string;
    owner: string;
    name: string;
    description: string;
    balance: u128;
    availableBalance: u128;
    streams: string[];
    public static fromPayload(payload: Vault): Vault {
        const vault = new Vault();
        vault.id = payload.id;
        vault.owner = payload.owner;
        vault.name = payload.name;
        vault.description = payload.description;
        vault.balance = payload.balance;
        vault.availableBalance = payload.availableBalance;
        vault.streams = payload.streams;
        return vault;
    }
}

export const listedVaults = new PersistentUnorderedMap<string, Vault>("v");

export class Stream {
    id: string;
    owner: string;
    description: string;
    sender: string;
    recipient: string;
    startBlockHeight: string;
    endBlockHeight: string;
    flowRate: u32;
}