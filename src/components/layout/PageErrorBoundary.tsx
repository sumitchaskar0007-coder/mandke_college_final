import { Component, type ReactNode } from "react";
export class PageErrorBoundary extends Component<{children: ReactNode}, {error: Error | null}> {
 state = {error: null as Error | null};
 static getDerivedStateFromError(error: Error) {return {error};}
 componentDidCatch(error: Error) {console.error("Mandke College page error", error);}
 render() {
  if (!this.state.error) return this.props.children;
  return <section role="alert" className="mx-auto max-w-3xl px-4 py-16"><h1 className="font-heading text-2xl font-bold text-primary">Page could not load</h1><p className="mt-4">Please refresh the page to try again.</p><button onClick={()=>window.location.reload()} className="mt-5 rounded-btn bg-primary px-5 py-3 text-white">Refresh page</button>{import.meta.env.DEV && <pre className="mt-6 whitespace-pre-wrap text-sm text-red-700">{this.state.error.message}</pre>}</section>;
 }
}
