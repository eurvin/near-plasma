import {Vault, Stream, listedVaults, listedStreams} from './model';
import { context } from 'near-sdk-as';

// createVault: creates a vault entry for the user
function createVault(vault: Vault) {
    listedVaults.set(vault.owner, Vault.fromPayload(vault));
    // creates a new vault with a given balance for sender
    // creates a 0 balance vault for receiver
}

// getVault: and details when the user in logged in
export function getVault() {
    // check if the requester is also the owner
    listedVaults.get(context.sender);
}

// createStream, creates a stream for the user
export function createStream(stream: Stream) {
    // add the vault ID
    return listedStreams.set(context.sender, Stream.fromPayload(stream))
}

// getStream, gets all data of an individual stream
export function getStream(id: string) {
    // check ownership
    return listedStreams.get(id);
}

// getStreams, gets basic data about all streams relating to a user
export async function getStreams() {
    // check ownership
    return listedStreams.values();
}

