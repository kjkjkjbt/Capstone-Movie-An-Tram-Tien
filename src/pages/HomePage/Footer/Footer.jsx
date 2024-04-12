import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <footer className=" text-white p-4 text-center ">
      <div className="container mx-auto bg-black space-y-3 hover:bg-rose-50">
        <div className="flex justify-center items-center space-x-4 ">
          <span className="text-white underline decoration-sky-400 hover:text-rose-400	cursor-alias	">Facebook</span>
          <span className="text-white underline decoration-sky-400 hover:text-rose-400	cursor-alias	">Instagram</span>
          <span className="text-white underline decoration-sky-400 hover:text-rose-400	cursor-alias	">Pinterest</span>
        </div>
        <div className="flex justify-center items-center mt-4">
          <span className="text-white hover:text-rose-400	cursor-wait	"> Information </span>
        </div>
        <p className="mt-4 text-rose-400 hover:underline cursor-wait">&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
    )
  }
}
