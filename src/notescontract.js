import web3 from "./web3";

const address = "0x650fD200817085a5f2F99C5D2E42e58F6e37A5b1";

const abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
    signature: "constructor",
  },
  {
    inputs: [
      { internalType: "string", name: "_title", type: "string" },
      { internalType: "string", name: "_content", type: "string" },
    ],
    name: "addNote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x2fdccd0b",
  },
  {
    inputs: [{ internalType: "uint256", name: "_id", type: "uint256" }],
    name: "getNote",
    outputs: [
      { internalType: "string", name: "", type: "string" },
      { internalType: "string", name: "", type: "string" },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
    signature: "0xa965a941",
  },
  {
    inputs: [{ internalType: "address", name: "_user", type: "address" }],
    name: "getUserNotes",
    outputs: [
      { internalType: "string[]", name: "titles", type: "string[]" },
      { internalType: "string[]", name: "contents", type: "string[]" },
      { internalType: "uint256[]", name: "noteIds", type: "uint256[]" },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
    signature: "0xd0ccd9f8",
  },
  {
    inputs: [],
    name: "noteCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
    constant: true,
    signature: "0x317a4c76",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
    constant: true,
    signature: "0x8da5cb5b",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    name: "userNoteIds",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
    constant: true,
    signature: "0x107b80c4",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    name: "userNotes",
    outputs: [
      { internalType: "string", name: "title", type: "string" },
      { internalType: "string", name: "content", type: "string" },
      { internalType: "uint256", name: "id", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
    signature: "0xeb028352",
  },
];

export default new web3.eth.Contract(abi, address);
