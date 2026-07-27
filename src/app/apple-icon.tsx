import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = {
    width: 180,
    height: 180,
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
                    borderRadius: '40px',
                    border: '8px solid #DB4444',
                    boxShadow: '0 0 40px rgba(219, 68, 68, 0.6)',
                }}
            >
                <span
                    style={{
                        fontSize: 110,
                        fontWeight: 900,
                        color: '#DB4444',
                        fontFamily: 'sans-serif',
                        letterSpacing: '-3px',
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
