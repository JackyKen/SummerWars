const sceneOpAbi = [
  {
    constant: false,
    inputs: [
      { name: '_to', type: 'address' },
      { name: '_decision', type: 'uint256' },
      { name: '_scene', type: 'address' },
    ],
    name: 'process',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: '_kind', type: 'uint8' },
      { name: '_scene', type: 'address' },
    ],
    name: 'setKind',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: 'x', type: 'uint8' },
      { name: 'y', type: 'uint8' },
      { name: '_scene', type: 'address' },
    ],
    name: 'setLocation',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: '_proxy', type: 'address' },
      { name: '_scene', type: 'address' },
    ],
    name: 'setProxy',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: '_description', type: 'string' },
      { name: '_scene', type: 'address' },
    ],
    name: 'setDescription',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: '_name', type: 'string' },
      { name: '_scene', type: 'address' },
    ],
    name: 'setName',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
]
export default sceneOpAbi