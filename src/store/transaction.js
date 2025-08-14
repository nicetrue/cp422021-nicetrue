import { defineStore } from "pinia";
import { call, db } from "@/firebase"

export const useTransactionStore = defineStore({
  id: "transaction",
  state: () => {
    return {
      transactions : []
    }
  },
  actions: {
    async addTransaction(transaction) {
      //generate id
      transaction.id = Math.random().toString(36).substr(2, 9)
      // created date
      transaction.created = new Date()
      this.transactions.push(transaction)
      //cal function 
      let res = await call("billTable", {name : transaction.table});
      if(!res.success){
              console.log("error adding transaction")
      }
    }
  }
});
