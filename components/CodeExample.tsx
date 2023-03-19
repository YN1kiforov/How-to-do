import { Inter } from 'next/font/google'
import s from '../styles/CodeExample.module.css'

const inter = Inter({ subsets: ['latin'] })

const copyToClipboard = (text: string) => {
	navigator.clipboard.writeText(text)
		.catch((error) => {
			console.error("Error copying text to clipboard:", error);
		});
}

type ComponentProps = {
	htmlCode: string;
	cssCode?: string;
	jsCode?: string;
}
export default function CodeExample(props: ComponentProps) {
	return (
		<code className={s.code}>
			<button className={s.button} onClick={(e) => { copyToClipboard(props.htmlCode) }}>Copy</button>
			<pre>
				<div>{props.htmlCode}</div>
			</pre>
		</code>
	)
}
