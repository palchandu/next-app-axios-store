export default function ColorBoxLayout({ children,Left,Right}) {
    return (<section>
       {Left}
        {children}
       {Right}
    </section>)
}