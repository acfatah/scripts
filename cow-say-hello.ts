#!/usr/bin/env bun

// @ts-ignore
import * as cowsay from "cowsay"

let output: string = cowsay.say({
  text: 'Hello!'
})

console.log(output)

