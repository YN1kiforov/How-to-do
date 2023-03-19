import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import sanitizeHtml from "sanitize-html";
const inter = Inter({ subsets: ['latin'] })

export default function LeftSide() {
	return (
		<div>LeftSide</div>
	)
}
