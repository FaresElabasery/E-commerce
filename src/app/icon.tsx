import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = {
    width: 32,
    height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#0F172A',
                    borderRadius: '8px',
                    border: '1.5px solid #DB4444',
                    boxShadow: '0 0 10px rgba(219, 68, 68, 0.5)',
                }}
            >
                <span
                    style={{
                        fontSize: 20,
                        fontWeight: 900,
                        color: '#DB4444',
                        fontFamily: 'sans-serif',
                        letterSpacing: '-1px',
                    }}
                >
                    E
                </span>
            </div>
        ),
        {
            ...size,
        }
    );
}
