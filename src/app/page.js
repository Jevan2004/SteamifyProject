"use client";

import { useState } from "react";
import { Search, Plus, Settings, ArrowUpDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function GamingPlatform() {
  const [searchQuery, setSearchQuery] = useState("")

  // Placeholder game data
  const games = [
    {
      id: 1,
      title: "Counter Strike 2",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_148-7SEZ39N3VvSJWssCIjASxBDmUmZb40.png", // Using the source image for demo
      price: "Free",
    },
    ...Array(9)
      .fill(null)
      .map((_, i) => ({
        id: i + 2,
        title: "Game",
        image: null,
        price: "Price",
      })),
  ]

  return (
    <div className="gaming-platform">
      <div className="container">
        {/* Profile Card */}
        <div className="profile-card">
          <div className="profile-image-container">
            <Image
              src="/placeholder.svg?height=220&width=220"
              alt="Profile picture of a cat"
              width={220}
              height={220}
              className="profile-image"
            />
          </div>
          <div className="profile-info">
            <h1 className="profile-name">Username</h1>
            <p className="profile-location">Nationality/hometown</p>
            <p className="profile-description">Short profile description: I am a cat meow</p>
          </div>
        </div>

        {/* Library Section */}
        <div className="library-section">
          <div className="library-header">
            <h2 className="library-title">Your library</h2>
            <div className="search-container">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <Settings className="settings-icon" />
            </div>
          </div>

          {/* Games Grid */}
          <div className="games-grid">
            {games.map((game) => (
              <div key={game.id} className="game-card">
                <div className="game-image-container">
                  {game.id === 1 ? (
                    <div className="game-image-wrapper">
                      <Image src="/placeholder.svg?height=300&width=225" alt={game.title} fill className="game-image" />
                      <div className="game-overlay">
                        <div className="game-title-overlay">Counter Strike 2</div>
                        <div className="game-price-overlay">Free</div>
                      </div>
                    </div>
                  ) : (
                    <div className="game-placeholder">N/A</div>
                  )}
                </div>
                <div className="game-info">
                  <p className="game-title">{game.id === 1 ? "Counter Strike 2" : "Game"}</p>
                  <p className="game-price">{game.id === 1 ? "Free" : "Price"}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Add Button */}
          <div className="add-button-container">
            <button className="add-button">
              <Plus className="add-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

