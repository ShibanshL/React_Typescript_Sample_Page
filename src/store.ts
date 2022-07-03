// import { type } from "os";
import React, { useEffect, useState } from 'react'

import create from "zustand";

interface Todo {
    log:boolean
    num:number
}


type Store = {
    nums:number,
    setNums : (e:number) => void
}

export const useStore = create<Store>((set) => ({
    nums:0,
    setNums: (e:number) => set(() => ({nums:e})),
}))

type Store1 = {
    log:boolean,
    setLogT: () => void
    setLogF: () => void
}

export const useSTore1 = create<Store1>((set) => ({
    log:false,
    setLogT: () => set(state => ({log:true})),
    setLogF: () => set(state => ({log:false}))
}))