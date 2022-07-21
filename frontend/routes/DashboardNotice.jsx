import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EventSection from '../pages/Notice/EventSection'
import Notices from '../pages/Notice/Notices'
import NoveltySection from '../pages/Notice/NoveltySection'

export default function DashboardNotice() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Notices />} />
        <Route path="/novelties" element={<div>Novelties</div>} />
        <Route path="/novelties/:idNovelties" element={<NoveltySection />} />
        <Route path="/events" element={<div>Events</div>} />
        <Route path="/events/:idEvents" element={<EventSection />} />
      </Routes>
    </div>
  )
}
