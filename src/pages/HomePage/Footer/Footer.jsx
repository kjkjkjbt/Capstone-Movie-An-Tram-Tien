import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <footer className="bg-gray-800 text-white p-4 text-center">
      <div className="container mx-auto">
        <div className="flex justify-center items-center space-x-4">
          <span className="text-white hover:text-gray-400">Facebook</span>
          <span className="text-white hover:text-gray-400">Instagram</span>
          <span className="text-white hover:text-gray-400">Pinterest</span>
        </div>
        <div className="flex justify-center items-center mt-4">
          <span className="text-white hover:text-gray-400">Liên quan đến rạp phim</span>
        </div>
        <p className="mt-4">&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
    )
  }
}
