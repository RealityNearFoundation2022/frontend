import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Events from '../pages/Notice/Events'
import EventSection from '../pages/Notice/EventSection'
import Notices from '../pages/Notice/Notices'
import Novelties from '../pages/Notice/Novelties'
import NoveltySection from '../pages/Notice/NoveltySection'

export default function DashboardNotice() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Notices />} />
        <Route path="/novelties" element={<Novelties />} />
        <Route path="/novelties/:idNovelties" element={<NoveltySection />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:idEvents" element={<EventSection />} />
      </Routes>
    </div>
  )
}
