#!/bin/bash

if [ -z "$ETH_RPC" ]; then
  echo "Ethereum RPC URL not provided"
  exit 1
fi

arb-node --l1.url "$ETH_RPC"