import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PawPrint, Tractor, CheckCircle2, FlaskConical, FileText } from 'lucide-react';
import MolecularBackground from './MolecularBackground';
import { useLanguage } from '../context/LanguageContext';

// Species SVG icons rendered with fill-current for dynamic negative/color matching
function BovinosIcon({ className = "w-7 h-7 md:w-9 md:h-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 192.17 185.42" className={`fill-current ${className}`}>
      <path d="M173.38,73.19c-5.86-11.29-17.45-16.15-30.47-16.27,8.06-18.05-1.26-41.01-9.11-38.28-2.04.71-3.18,1.89-4.01,5.48-1.61,6.96-8.62,20.35-17.53,20.34l-33.35-.03c-9.42,0-16.39-13.77-18.03-21.2-.73-3.31-2.07-3.78-3.61-4.48-7.42-3.38-17.5,18.62-9.43,38.48-11.19-.51-29.69,5.9-29.5,18.39.18,12.34,19.8,18.4,30.12,16.28l6.69,45.4c.3,14.7,8.08,26.83,24.47,28.79,9.94,1.19,22.17,1.29,32.21.08,16.49-1.99,24.02-15.5,24.25-30.18l6.36-44.37c16.54,3.98,34.49-11.6,30.94-18.42ZM49.28,81.07c-6.99,4.59-16.92.63-22.25-5.6,6.33-8,16.39-11.06,26.72-8.28l-4.47,13.87ZM55.16,35.43c3.69,6.43,6.63,11.05,13.5,15.19l-8.12,7.22c-5.17-6.03-7.55-14.26-5.38-22.41ZM124.38,145.9c-2.08,14.27-30.82,13.99-47.23,10.14-5.64-1.32-9.69-5.73-10.52-10.12-3.09-16.25,29.47-25.63,50.94-13.37,5.2,2.97,7.53,8.42,6.81,13.36ZM133,93.41l-5.99,34.12c-17.22-12.93-45.7-13.28-62.98.36l-5.7-34.43c-2.58-15.6,5.17-30.55,19.39-37.29,12.29-4,25.59-3.97,37.58,1.04,12.76,7.4,18.85,21.5,17.71,36.2ZM130.96,57.65l-8.74-7.03c6.31-3.75,9.14-8.15,13.43-14.58,2.42,7.85.29,14.27-4.69,21.61ZM141.89,81.7l-4.37-14.55c9.78-2.52,18.71-.05,26.05,8.25-5.21,6.77-14.12,8.91-21.68,6.3Z"/>
      <path d="M115.09,84.53c-3.58,0-6.48,2.9-6.48,6.48s2.9,6.48,6.48,6.48,6.48-2.9,6.48-6.48-2.9-6.48-6.48-6.48Z"/>
      <path d="M75.8,84.67c-3.55,0-6.44,2.88-6.44,6.44s2.88,6.44,6.44,6.44,6.44-2.88,6.44-6.44-2.88-6.44-6.44-6.44Z"/>
      <circle cx="107.69" cy="143.14" r="5.49"/>
      <circle cx="83.35" cy="143.16" r="5.55"/>
    </svg>
  );
}

function OvinosIcon({ className = "w-7 h-7 md:w-9 md:h-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 192.17 185.42" className={`fill-current ${className}`}>
      <path d="M151.54,65.74c2.07-10.36-1.21-19.13-7.66-25.72-6.82-6.02-15.9-8.47-25.5-7.41-6.03-7.52-14.43-11.17-23.07-11.18-8.66-.03-16.53,4.29-22.44,11.58-10.05-1.12-19.31,1.79-25.75,8.65-5.88,6.09-7.74,15-6.32,24.21-12.36,2.63-22.43,10.17-26.72,21.54-2.25,5.96-.16,11.93,4.51,15.55,8.85,6.87,19.59,8.02,30.37,4.9,2.79,16.27,8.66,30.72,19.13,42.74,14.14,16.25,37.68,18.41,53.69,2.74,12.83-12.55,18.23-28.59,21.75-45.66,12,3.66,23.82,1.84,32.15-6.48,10.42-10.42-5.31-31.86-24.14-35.45ZM49.02,80.12l-1.32,18.14c-6.17,3.02-20.66,3.07-24.25-4.5-1.34-10.09,12.47-18.53,21.12-18.74,3.51-.08,4.61,2.99,4.45,5.1ZM95.4,154.87c-26.66-.99-41.93-43.62-37.66-71.98,7.67,1.66,14.88,1.33,21.91-2.76,10.38,7.61,22.38,6.09,33.08.43,6.3,1.98,13.98,5.51,21.7,2.23,3.91,29.71-11.39,73.12-39.03,72.09ZM141.98,63.53c-1.68,5.78-7.02,9.61-11.78,10.78-6.83,1.69-12.14-.45-18.1-6.71-7.23,9.42-19.5,12.05-28.08,4.19-7.48-6.85-8.22,4.91-21.19,2.77-4.59-.76-9.76-4.13-11.88-9.43-3.04-7.59.65-14.23,4.85-18.84,5.56-6.1,14.62-2.77,20.56-2.85,5.92-5.81,10.35-12.24,19-12.45,8.95-.22,13.93,6.54,19.81,12.69,6.16-.8,14.84-3.89,20.56,1.61,4.51,4.34,8.5,10.51,6.25,18.24ZM145.17,98.86l-1.82-16.91c-.17-1.56-.43-3.38.08-4.31,4.3-7.76,26,3.85,25.37,15.86-2.48,7.7-16.33,7.46-23.63,5.35Z"/>
      <path d="M105.06,129.14c-5.99-.64-12.21-1.03-18.25.11-2.88.54-1.74,6.13.72,7.51,5.4,3.02,8.24,13.87,10.52,8.6,2.09-4.84,3.73-7.72,7.44-10.35,1.77-1.26,1.99-5.6-.43-5.86Z"/>
      <path d="M115.35,100.02c-3.45,0-6.25,2.8-6.25,6.25s2.8,6.25,6.25,6.25,6.25-2.8,6.25-6.25-2.8-6.25-6.25-6.25Z"/>
      <path d="M76.59,100.12c-3.45,0-6.24,2.79-6.24,6.24s2.79,6.24,6.24,6.24,6.24-2.79,6.24-6.24-2.79-6.24-6.24-6.24Z"/>
    </svg>
  );
}

function CaprinosIcon({ className = "w-7 h-7 md:w-9 md:h-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 192.17 185.42" className={`fill-current ${className}`}>
      <path d="M179.63,67.66c-9.9-9.29-24.38-11.04-37.05-7.29-2.2-5.36-5.16-8.44-8.53-12.01.5-6.76,6.67-14.73,13.12-15.98,10.15-1.97,18.79,9.23,21.21,2.11,1.93-5.67-18.35-26.9-40.27-18.69-10.36,3.88-17.95,12.26-23.19,22.03l-17.34-.1c-5.69-12.02-15.58-21.75-29.08-23.53-19.84-2.62-39,17.18-32.88,21.8,5.23,3.95,15.69-10.28,26.68-.2,3.68,3.37,5.9,8,7.35,12.82-4.15,3.34-6.81,6.79-9.31,11.68-13.33-4.38-27.15-1.2-38.04,7.46,4.64,18.39,23.3,28.97,40.42,22.32l8.77,33.73c3.59,9.23,9.06,17.12,17.48,22.56,1.55,8.87,4.83,16.81,11.44,22.56,3.64,3.11,8.26,3.61,11.69.26,6.97-5.57,10.63-13.4,11.92-22.35,7.46-5.79,13.63-12.48,17.18-21.91l9.45-34.83c11.8,4.49,23.68,1.09,32.11-8.03,3.26-3.53,8.29-9.39,6.88-14.42ZM49.9,81.35c-10.11,4.56-21.3-.49-25.99-10.17,7.87-3.8,16.94-5.26,24.05-.8,2.94,1.84,2.6,7.87,1.94,10.97ZM141.75,23.71c-7.93,5.58-13.38,11.01-16.39,19.83l-10.58-3.62c5.48-10.38,15.11-17.72,26.97-16.21ZM50.61,23.9c11.84-2.3,20.91,4.64,27.51,15.22-3.05,3.11-6.97,3.78-11.05,4.36-2.72-9.09-7.51-15.18-16.46-19.58ZM96.82,161.77c-3.98-3.13-6.29-6.55-7.02-11.22,4.28,1.05,6.71.95,12.81.78-.41,4.55-2.53,7.35-5.79,10.45ZM134.11,76.46l-9.36,38.6c-1.58,6.51-4.32,12.31-8.97,17.89-10.66,12.78-29.16,11.58-39.21-.85-3.21-3.96-6.02-8.13-7.26-13.28l-10.35-43.06c-2.23-9.27,1.36-17.54,10.17-22.13,16.37-8.53,36.9-8.53,53.5-.75,9.87,4.62,14.07,12.91,11.48,23.58ZM144.11,81.22c-2.4-1.22-.95-7.96-.22-10.34,7.56-4.33,17.5-4.23,25.12.92-4.77,8.77-15.44,14.25-24.9,9.42Z"/>
      <path d="M104.23,114.06c-5.47-.99-11.74-1.61-16.7.65-2.08.95-2.13,4.17-1.06,5.3l3.27,3.46c1.74,1.85,4.35,7.06,7.81,5.41,6.3-3,13.05-13.66,6.68-14.82Z"/>
      <path d="M77.97,83.48c-3.48,0-6.31,2.82-6.31,6.31s2.82,6.31,6.31,6.31,6.31-2.82,6.31-6.31-2.82-6.31-6.31-6.31Z"/>
      <circle cx="115.15" cy="89.63" r="6.27"/>
    </svg>
  );
}

function EquinosIcon({ className = "w-7 h-7 md:w-9 md:h-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 192.17 185.42" className={`fill-current ${className}`}>
      <path d="M133.92,80.89c0-3.28-2.66-5.95-5.95-5.95s-5.95,2.66-5.95,5.95,2.66,5.95,5.95,5.95,5.95-2.66,5.95-5.95Z"/>
      <path d="M171.03,101.2l-18.27-33.68c-4.53-8.34-9.87-15.36-18.15-20.77-1.09-12.06,3.3-26.05-.19-28.84-5.44-4.35-23.92,6.11-29.9,19.32-43.62,2.35-67.76,37.94-78.49,77.74l-7.87,29.18c-.47,1.73-.88,3.25-.51,4.38,1.36,4.19,10.06,3.66,17.09,1.06,11.57-4.29,19.5-13.76,23.46-25.87l11.43-35c5.85-17.92,22.18-43.07,40.64-42.5,4.17-6.74,6.38-15.17,15.49-17.62-.23,7.94-1.1,14.85-.51,22.22,9.86,5.93,15.75,14.68,21.05,24.5l18.23,33.8c2.73,5.07,1.25,10.84-1.94,14.5-3.61,4.15-10.33,6.74-15.13,2.49-5.41-4.78-10.12-11.58-18.23-11.56-18.39.05-19.36-13.32-24.56-9.47-3.35,2.48-.72,5.03.11,7.82,4.45,14.92,1.49,31.52-4.87,45.52-1.31,2.88-2.46,4.88-2.17,7.63,1.02.73,2.25,2.45,3.77,2.48,8.36.17,15.59-29.93,14.59-46.28l13.05,1.88c3.34.48,6.21,2.88,8.15,5.22,7.54,9.08,18.98,9.78,28.05,3.01,10.29-7.68,11.82-19.82,5.68-31.14ZM28.92,141.71c3.99-20.68,10.18-40.31,19.98-58.51,7.25-11.33,14.45-22.34,28.19-28.19-12.14,18.43-19.94,38.78-25.48,60.57-4.04,11.22-8.82,22.53-22.68,26.13Z"/>
    </svg>
  );
}

function AvesIcon({ className = "w-7 h-7 md:w-9 md:h-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 192.17 185.42" className={`fill-current ${className}`}>
      <path d="M173.37,90.48c-5.55-10.11-15.07-16.74-26.73-20.18,5.18-15.46,10.44-31.84-.03-41.52-3.57-3.3-9.21-1.93-12.76-2.6-3.94-4.86-8.17-8.41-13.78-8.99-6.34-.65-10.01,5.72-14.08,8.4-6.6,1.26-13.51.17-16.96,8.35-3.21,7.62-1.22,16.4.28,24.59l-16.74,18.8c-16.78,26.58-41.97,11.69-48.33,15.37-10.29,5.94-8.69,42.7,19.47,62.09,30.54,21.03,75.23,18.5,95.49-14.73,6.8-11.15,9.11-23.21,10-36.15l19.47-7.27c2.17-.81,6.36-3.14,4.71-6.15ZM98.61,36.25c2.78-3.71,8.52,3.81,11.76,3.35,4.26-.61,2.64-13.27,10.08-12.56,5.97.57,4.49,10.86,7.94,12.24,3.89,1.56,6.68-4.32,10.66-3.78,5.7.77,5.48,13.15.69,24.32-12.07-9.19-26.95-10.7-41.48-5.52-2.14-5.33-3.58-12.8.35-18.04ZM121.21,120.59c.25,2.22,2.22,4.18,4.97,4.07,4.36-.19,7.1-2.79,10.96-4.79-4.61,20.34-19.55,35.07-40.12,38.11-17.92,2.65-36.56-1.48-50.58-12.85-13.11-10.63-19.89-26.52-18.02-43.66,13.3,2.66,25.93,3.04,36.89-3.91,16.23-10.29,22.39-36.14,48.38-37.06,11.89-.42,22.39,5.52,26.3,16.16,1.28,6.75,1.58,14.27.28,21.07-5.51,16.69-19.64,17.58-19.05,22.86ZM144.87,94.87c1.78-4.14,1.78-10.01.07-14.29,6.34.99,12.11,3.31,16.19,9.56-5.65,2.17-10.88,4.34-16.26,4.73Z"/>
      <circle cx="118.32" cy="87.2" r="6.75" transform="translate(-3.83 5.45) rotate(-2.6)"/>
    </svg>
  );
}

function CaninosIcon({ className = "w-7 h-7 md:w-9 md:h-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 192.17 185.42" className={`fill-current ${className}`}>
      <path d="M154.42,30.52c-12.36-8.18-27.41-7.2-37.98,2.85-13.72-2.65-26.75-2.93-40.55.15-10.59-10.44-26.28-11.17-38.67-2.54-16.33,11.37-25.51,30.42-27.4,50.35.1,7.3,1.25,13.9,5.32,19.55,5.13,7.12,13.64,9.87,22,6.48-1.16,21.9,10.5,40.53,30.69,47.9,18.61,6.79,38.29,6.9,56.85-.05,20.12-7.53,31.81-26.06,30.7-47.51,10.16,3.32,18.49-.72,22.88-8.72,3-5.47,3.99-11.07,4.11-17.63-1.54-20.26-11.08-39.66-27.94-50.83ZM27.96,98.88c-14.49-3.96-10.34-39.07,11.3-57.69,7.77-6.68,18.27-9,27.18-3.35l-8.77,9.16c-19.56,27.22-15.49,55.77-29.71,51.88ZM122.81,145.81c-17.68,7.26-36.5,6.79-53.56-.25-14.36-5.93-23.01-19.51-22.53-35.43.66-22.15,11.93-60.37,30.82-66.54,11.52-3.76,23.97-3.36,35.63-.88,19.03,4.06,30.99,44.29,32.45,66.01,1.1,16.36-7.41,30.76-22.81,37.08ZM161.49,99.16c-11.34-1.12-8.64-22.15-22.95-46.21-3.45-5.8-7.41-10.55-12.57-15,6.98-4.66,15.49-4.31,22.18.04,29.92,19.48,30.16,62.84,13.34,61.17Z"/>
      <path d="M82.77,118.16c2.7,6.12,7.49,11.1,13.34,14.11,7.44-5.66,15.42-13.16,13.09-17.8-3.63-7.24-30.38-5.26-26.44,3.7Z"/>
      <circle cx="72.13" cy="89.07" r="7.24"/>
      <path d="M119.81,81.78c-4.01,0-7.27,3.25-7.27,7.27s3.25,7.27,7.27,7.27,7.27-3.25,7.27-7.27-3.25-7.27-7.27-7.27Z"/>
    </svg>
  );
}

function FelinosIcon({ className = "w-7 h-7 md:w-9 md:h-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 192.17 185.42" className={`fill-current ${className}`}>
      <path d="M173.74,96.86c-1.87-1.87-4.54-1.69-8.02-1.76l-6.28-23.24c-.96-13.83,1.46-43.6-5.01-46.97-7.1-3.7-27.81,10.42-38.3,20.02-13.2-2.98-25.92-2.99-39.42.08-10.86-9.43-32.32-24.46-39.21-19.97-6.41,4.18-3.94,32.44-4.85,46.88l-6.19,23.11c-3.42.32-5.63.07-7.51,1.3-2.41,1.59-1.73,5.3.14,6.5,1.28.82,4.52.86,6.48,1.24l3.53,17.16c-.11.99-2.99,1.83-3.84,1.92-3.29.34-4.8,2.66-4.25,5.28.34,1.62,2.37,3.73,4.73,3.13l7.15-1.83c19.33,29.46,59.74,38.12,92.55,26.59,14.64-5.14,25.5-14.49,34.28-27.29,4.73,3.27,9.24,2.98,11.05.16,1.38-2.14-.27-4.66-1.45-5.27-1.7-.88-3.43-1.32-6.57-1.9l3.87-17.67,6.19-1.58c1.84-.47,2.8-4.01.92-5.89ZM153.04,118.23c-2.01,2.14-9.78-3.4-12.02,1.15-1.02,2.09-.41,4.77,1.93,5.61l6.15,2.21c-9.01,11.89-21.32,20.1-36.47,23.21-25.1,5.16-54.68-2.18-69.55-23.18,3.74-1.34,6.33-1.87,7.98-4.21,1.02-1.44.37-3.21-.3-3.97-1.17-1.34-2.93-1.91-5.07-1.39l-7.06,1.7c-1.6-4.83-3.17-9.29-3.18-14.22,2.67.45,4.99.1,6.67-1.13,1.05-.78,1.54-2.66.77-4.36-.81-1.79-3.86-2.62-6.7-2.85-1-6.2,2.52-13.16,5-19.13,3.36-8.12-1.92-26.8,2.35-43.41,11.78,5.38,21.21,11.93,30.53,20.35,15.2-4.36,29.78-4.25,45.03-.1,8.51-8.42,18.13-14.89,28.9-20.16,3.92,13.71.57,26.77,1.76,39.92.69,7.62,7.53,14.09,6.4,21.97l-6.32,2.16c-2.4.82-2.28,4.12-.71,5.83,1.38,1.51,3.76,2.04,7.23.78.03,4.4-.13,9.79-3.33,13.21Z"/>
      <path d="M87.75,115.79c-1.73,4.58,4.94,11.28,9.3,10.49,3.55-.64,9.56-6.56,8.32-10.51-1.95-6.25-15.41-5.88-17.63.01Z"/>
      <circle cx="68.53" cy="97.66" r="6.95"/>
      <path d="M123.52,90.82c-3.82,0-6.91,3.1-6.91,6.91s3.1,6.91,6.91,6.91,6.91-3.1,6.91-6.91-3.1-6.91-6.91-6.91Z"/>
    </svg>
  );
}

function CerdosIcon({ className = "w-7 h-7 md:w-9 md:h-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 192.17 185.42" className={className}>
      {/* Head and ears */}
      <path
        d="M57,49 C47,30 33,24 27,31 C21,38 25,62 35,76 C29,92 31,115 44,132 C58,150 77,158 96,158 C115,158 134,150 148,132 C161,115 163,92 157,76 C167,62 171,38 165,31 C159,24 145,30 135,49 C123,43 110,40 96,40 C82,40 69,43 57,49 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner ear folds */}
      <path
        d="M36,44 C41,50 45,58 47,66"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M156,44 C151,50 147,58 145,66"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
      />
      {/* Eyes */}
      <circle cx="66" cy="83" r="6.8" fill="currentColor" />
      <circle cx="126" cy="83" r="6.8" fill="currentColor" />
      {/* Snout */}
      <ellipse
        cx="96"
        cy="118"
        rx="29"
        ry="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="10"
      />
      {/* Nostrils */}
      <ellipse cx="85" cy="118" rx="4.8" ry="7.2" fill="currentColor" />
      <ellipse cx="107" cy="118" rx="4.8" ry="7.2" fill="currentColor" />
    </svg>
  );
}

export default function Species() {
  const [selectedProduction, setSelectedProduction] = useState<number>(0);
  const [selectedCompanion, setSelectedCompanion] = useState<number>(0);
  const { t } = useLanguage();

  const productionIcons = [
    <BovinosIcon key="bovinos" />,
    <div key="ovinos-caprinos" className="flex items-center gap-1">
      <OvinosIcon />
      <CaprinosIcon />
    </div>,
    <CerdosIcon key="cerdos" />,
    <EquinosIcon key="equinos" />,
    <AvesIcon key="aves" />
  ];

  const companionIcons = [
    <CaninosIcon key="caninos" />,
    <FelinosIcon key="felinos" />
  ];

  const currentProduction = t.species.productionItems[selectedProduction] || t.species.productionItems[0];
  const currentCompanion = t.species.companionItems[selectedCompanion] || t.species.companionItems[0];

  return (
    <section id="species" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <MolecularBackground variant="services" className="opacity-75" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 md:mb-16">
          <h2 className="text-[#FD8548] font-bold tracking-widest uppercase text-sm mb-3">{t.species.tag}</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-[#1a1640] mb-6 whitespace-pre-line">
            {t.species.title}
          </h3>
          <p className="text-gray-700 text-sm sm:text-base max-w-2xl font-light">
            {t.species.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Production Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="group relative bg-[#f8f7fd] rounded-2xl md:rounded-[2rem] p-5 sm:p-8 md:p-10 text-[#1a1640] border border-[#6A00C8]/20 transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between"
          >
            {/* Ambient subtle light */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#FD8548]/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 sm:gap-4 mb-6">
                <motion.div 
                  animate={{ y: [0, -3, 0] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center shrink-0 border-2 border-[#FD8548] shadow-sm"
                >
                  <Tractor className="w-6 h-6 md:w-8 md:h-8 text-[#FD8548]" />
                </motion.div>
                <div>
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a1640]">{t.species.productionTitle}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 font-normal mt-0.5">{t.species.productionSub}</p>
                </div>
              </div>
              
              {/* Species Pills - Línea naranja y fondo blanco cuando no seleccionado; negativo (fondo naranja, blanco) cuando seleccionado */}
              <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-6">
                {t.species.productionItems.map((item, index) => {
                  const isSelected = selectedProduction === index;
                  return (
                    <motion.button 
                      key={index} 
                      type="button"
                      onClick={() => setSelectedProduction(index)}
                      whileHover={{ scale: 1.04, y: -1 }}
                      whileTap={{ scale: 0.96 }}
                      className={`cursor-pointer rounded-full px-3.5 py-2 sm:px-4 sm:py-2 flex items-center gap-2.5 text-xs sm:text-sm font-bold transition-all duration-200 ${
                        isSelected 
                          ? 'bg-[#FD8548] text-white shadow-lg shadow-[#FD8548]/30 border-2 border-[#FD8548]' 
                          : 'bg-white hover:bg-orange-50/70 text-[#FD8548] border-2 border-[#FD8548] shadow-xs'
                      }`}
                    >
                      <div className="shrink-0 drop-shadow-xs">
                        {productionIcons[index]}
                      </div>
                      <span className="tracking-wide">{item.name}</span>
                      <span className={`w-2 h-2 rounded-full transition-colors ${
                        isSelected ? 'bg-white animate-pulse' : 'bg-[#FD8548]'
                      }`} />
                    </motion.button>
                  );
                })}
              </div>

              {/* Simulated Trial Description Section */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${currentProduction.name}-${selectedProduction}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white rounded-2xl p-5 border border-purple-200 shadow-md mb-6 space-y-3.5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FD8548] bg-[#FD8548]/10 px-3 py-1 rounded-lg border border-[#FD8548]/30">
                      <FlaskConical className="w-4 h-4 text-[#FD8548]" />
                      {t.species.simulatedTrial} • {currentProduction.name}
                    </span>
                  </div>

                  <h5 className="text-base sm:text-lg font-bold text-[#1a1640] leading-snug">
                    {currentProduction.trialTitle}
                  </h5>

                  <p className="text-sm text-gray-700 leading-relaxed font-normal">
                    {currentProduction.protocol}
                  </p>

                  <div className="pt-2 border-t border-purple-100 flex flex-wrap gap-2">
                    {currentProduction.parameters.map((param, pIdx) => (
                      <span 
                        key={pIdx} 
                        className="text-xs font-medium text-gray-700 bg-purple-50 border border-purple-200 px-2.5 py-1 rounded-full shadow-xs"
                      >
                        {param}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="pt-4 border-t border-purple-200 flex items-center gap-2 text-xs sm:text-sm text-gray-600">
              <CheckCircle2 className="w-4 h-4 text-[#FD8548] shrink-0" />
              <span>{t.species.productionFooter}</span>
            </div>
          </motion.div>

          {/* Companion Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.3 }}
            className="group relative bg-[#f3f0fa] rounded-2xl md:rounded-[2rem] p-5 sm:p-8 md:p-10 text-[#1a1640] border border-[#C800D6]/25 transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between"
          >
            {/* Ambient subtle light */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#C800D6]/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 sm:gap-4 mb-6">
                <motion.div 
                  animate={{ y: [0, -3, 0] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center shrink-0 border-2 border-[#C800D6] shadow-sm"
                >
                  <PawPrint className="w-6 h-6 md:w-8 md:h-8 text-[#C800D6]" />
                </motion.div>
                <div>
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a1640]">{t.species.companionTitle}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 font-normal mt-0.5">{t.species.companionSub}</p>
                </div>
              </div>
              
              {/* Species Pills - Línea violeta y fondo blanco cuando no seleccionado; negativo (fondo violeta, blanco) cuando seleccionado */}
              <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-6">
                {t.species.companionItems.map((item, index) => {
                  const isSelected = selectedCompanion === index;
                  return (
                    <motion.button 
                      key={index} 
                      type="button"
                      onClick={() => setSelectedCompanion(index)}
                      whileHover={{ scale: 1.04, y: -1 }}
                      whileTap={{ scale: 0.96 }}
                      className={`cursor-pointer rounded-full px-4 py-2 sm:px-5 sm:py-2 flex items-center gap-2.5 text-xs sm:text-sm font-bold transition-all duration-200 ${
                        isSelected 
                          ? 'bg-[#C800D6] text-white shadow-lg shadow-[#C800D6]/30 border-2 border-[#C800D6]' 
                          : 'bg-white hover:bg-purple-50/70 text-[#C800D6] border-2 border-[#C800D6] shadow-xs'
                      }`}
                    >
                      <div className="shrink-0 drop-shadow-xs">
                        {companionIcons[index]}
                      </div>
                      <span className="tracking-wide">{item.name}</span>
                      <span className={`w-2 h-2 rounded-full transition-colors ${
                        isSelected ? 'bg-white animate-pulse' : 'bg-[#C800D6]'
                      }`} />
                    </motion.button>
                  );
                })}
              </div>

              {/* Simulated Trial Description Section */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${currentCompanion.name}-${selectedCompanion}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white rounded-2xl p-5 border border-purple-200 shadow-md mb-6 space-y-3.5 text-[#1a1640]"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C800D6] bg-purple-100 px-3 py-1 rounded-lg border border-purple-200">
                      <FileText className="w-4 h-4 text-[#C800D6]" />
                      {t.species.simulatedTrial} • {currentCompanion.name}
                    </span>
                  </div>

                  <h5 className="text-base sm:text-lg font-bold text-[#1a1640] leading-snug">
                    {currentCompanion.trialTitle}
                  </h5>

                  <p className="text-sm text-gray-700 leading-relaxed font-normal">
                    {currentCompanion.protocol}
                  </p>

                  <div className="pt-2 border-t border-purple-100 flex flex-wrap gap-2">
                    {currentCompanion.parameters.map((param, pIdx) => (
                      <span 
                        key={pIdx} 
                        className="text-xs font-medium text-gray-700 bg-purple-50 border border-purple-200 px-2.5 py-1 rounded-full shadow-xs"
                      >
                        {param}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="pt-4 border-t border-purple-200 flex items-center gap-2 text-xs sm:text-sm text-gray-600">
              <CheckCircle2 className="w-4 h-4 text-[#C800D6] shrink-0" />
              <span>{t.species.companionFooter}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
