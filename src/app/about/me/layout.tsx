
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
      <nav>
        <ul>
            <li><button>등록</button></li>
            <li><button>삭제</button></li>
        </ul>
      </nav>
          {children}
      </>
    );
  }
  