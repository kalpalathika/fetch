// src/setupTests.ts
import '@testing-library/jest-dom';

import { TextEncoder, TextDecoder } from 'node:util';

global.TextEncoder = TextEncoder as typeof global.TextEncoder;
global.TextDecoder = TextDecoder as typeof global.TextDecoder;