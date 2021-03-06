/*
/* Temorary Solution
*/
const ADMIN = 'ADMIN';
const INVESTMENTS = 'INVESTMENTS';
const TREASURY = 'TREASURY';
const COLLECTION = 'COLLECTION';
/**
 * Treasury Module permissions
 */
export const ENTRIES_MODULE = [ADMIN, INVESTMENTS, TREASURY, COLLECTION];
export const CONFIRM_ASSOCIATION_MODULE = [ADMIN, INVESTMENTS, TREASURY, COLLECTION];
export const INVESTMENTS_MODULE = [ADMIN, INVESTMENTS, TREASURY];
export const PAYSHEET_MODULE = [ADMIN, TREASURY];
export const LOANS_MODULE = [ADMIN, TREASURY, COLLECTION];
export const COLLECTION_MODULE = [ADMIN, COLLECTION];
export const NAVBAR_TREASURY_MODULE = [ADMIN, TREASURY];
export const NAVBAR_COLLECTION_MODULE = [ADMIN, COLLECTION];
