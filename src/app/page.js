"use client"
import { useState } from "react";
import { Search, Plus, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { games } from "./games.js";
export default function GamingPlatform() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="gaming-platform">
      <div className="container">
        {/* Profile Card */}
        <div className="profile-card">
          <div className="profile-image-container">
            <Image
              src="/images/profile.png"
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
              <Link key={game.id} href={`/games/${game.id}`} passHref>
                <div className="game-card">
                  <div className="game-image-container">
                    {game.image ? (
                      <div className="game-image-wrapper relative">
                        <Image 
                          src={game.image} 
                          alt={game.title} 
                          layout="fill" 
                          className="game-image object-cover"
                        />
                        <div className="game-overlay">
                          <div className="game-title-overlay">{game.title}</div>
                          <div className="game-price-overlay">{game.price}</div>
                        </div>
                      </div>
                    ) : (
                      <div className="game-placeholder">N/A</div>
                    )}
                  </div>
                  <div className="game-info">
                    <p className="game-title">{game.title}</p>
                    <p className="game-price">{game.price}</p>
                  </div>
                </div>
              </Link>
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
  );
}
