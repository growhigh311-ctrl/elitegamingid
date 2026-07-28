import React from 'react';
import BlogDetails from '../../page-templates/BlogDetails.jsx';
import brand from '../../config/brand.js';

export const metadata = {
  title: "The Complete Beginner's Guide to Betting on IPL Cricket: No Knowledge Required",
  description: "New to cricket? Learn how to bet on the IPL with this 2026 beginner’s guide. We break down the basics of odds, research, and bankroll management.",
  alternates: {
    canonical: `https://${brand.domain}/beginners-guide-ipl-betting/`,
  }
};

export default function Page() {
  return <BlogDetails slug="beginners-guide-ipl-betting" />;
}
