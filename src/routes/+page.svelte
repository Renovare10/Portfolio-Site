<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chad Murchison Portfolio</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: #1e1e1e; /* VS Code dark background */
            color: #d4d4d4; /* Light text */
        }
        .container {
            text-align: center;
            max-width: 800px;
            padding: 20px;
        }
        h1 {
            color: #007acc; /* VS Code blue accent */
            font-size: 2.5rem;
            margin-bottom: 2rem;
        }
        .card-list {
            display: grid;
            gap: 1.5rem;
            padding: 0;
        }
        .card {
            background-color: #252526; /* VS Code sidebar dark */
            padding: 1.5rem;
            border-radius: 5px;
            text-align: left;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        }
        .card h3 {
            color: #d4d4d4;
            margin: 0 0 0.5rem;
            font-size: 1.25rem;
        }
        .card p {
            margin: 0 0 1rem;
            color: #a0a0a0;
            font-size: 1rem;
        }
        .card a.button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #007acc;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
            font-weight: 500;
            transition: background-color 0.2s;
        }
        .card a.button:hover {
            background-color: #005f99;
        }
        .tech-stack {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-top: 1rem;
        }
        .tech-stack span {
            background-color: #3c3c3c; /* VS Code editor dark */
            color: #d4d4d4;
            padding: 0.25rem 0.5rem;
            border-radius: 3px;
            font-size: 0.875rem;
        }
        @media (max-width: 600px) {
            h1 {
                font-size: 1.8rem;
            }
            .card {
                padding: 1rem;
            }
            .card a.button {
                width: 100%;
                text-align: center;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Chad Murchison's Portfolio</h1>
        <div class="card-list">
            <div class="card">
                <h3>Kingslayer Holdout</h3>
                <p>A strategic survival game where players defend against waves of enemies in a dynamic 2D battlefield.</p>
                <a href="https://kingslayer-holdout.chadmurchison.com/" class="button">Play Kingslayer Holdout</a>
                <div class="tech-stack">
                    <span>Vite</span>
                    <span>Phaser 2D</span>
                    <span>JavaScript</span>
                    <span>AWS S3</span>
                </div>
            </div>
            <div class="card">
                <h3>1010 Glow</h3>
                <p>A vibrant puzzle game inspired by 1010!, featuring a responsive 10x10 grid with PWA support.</p>
                <a href="https://1010-glow.chadmurchison.com/" class="button">Play 1010 Glow</a>
                <div class="tech-stack">
                    <span>Svelte</span>
                    <span>TypeScript</span>
                    <span>Vite</span>
                    <span>PWA</span>
                    <span>AWS S3</span>
                </div>
            </div>
            <!-- NEW CARD: NWGA Eviction Service -->
            <div class="card">
                <h3>NWGA Eviction Service</h3>
                <p>A professional eviction management service for Northwest Georgia landlords and property managers.</p>
                <a href="https://NWGAEvictionService.chadmurchison.com/" class="button">Visit NWGA Eviction Service</a>
                <div class="tech-stack">
                    <span>Svelte</span>
                    <span>SvelteKit</span>
                    <span>AWS S3</span>
                    <span>CloudFront</span>
                </div>
            </div>
        </div>
    </div>
</body>
</html>