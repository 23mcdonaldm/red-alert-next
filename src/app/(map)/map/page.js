'use client'
import React from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';
import MapContainer from '@/components/MapContainer/MapContainer';
import Footer from '@/components/Footer/Footer';
import './Map.css';

export default function Map() {
  return (
    <div className="map">
      <Sidebar />
      <MapContainer />
      
    </div>
  );
}


