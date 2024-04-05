import React from 'react'

const Footer = () => {
  return (
    <footer class=" bg-slate-800  text-white py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center">
            <p>&copy; 2024 blog by Anand. All rights reserved.</p>
            <ul class="flex space-x-4">
                <li><a href="#" class="hover:text-gray-400">Home</a></li>
                <li><a href="#" class="hover:text-gray-400">About</a></li>
                <li><a href="#" class="hover:text-gray-400">Services</a></li>
                <li><a href="#" class="hover:text-gray-400">Contact</a></li>
            </ul>
        </div>
    </div>
</footer>
  )
}

export default Footer