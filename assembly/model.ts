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

@nearBindgen
export class Stream {
    id: string;
    owner: string;
    description: string;
    sender: string;
    recipient: string;
    startBlockHeight: string;
    endBlockHeight: string;
    flowRate: u32;
    public static fromPayload(payload: Stream): Stream {
        const stream = new Stream();
        stream.id = payload.id;
        stream.owner = payload.owner;
        stream.description = payload.description;
        stream.sender = payload.sender;
        stream.recipient = payload.recipient;
        stream.startBlockHeight = payload.startBlockHeight;
        stream.endBlockHeight = payload.endBlockHeight;
        stream.flowRate = payload.flowRate;
        return stream;
    }
}

export const listedVaults = new PersistentUnorderedMap<string, Vault>("pv");

export const listedStreams = new PersistentUnorderedMap<string, Stream>("ps");