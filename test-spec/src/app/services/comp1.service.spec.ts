import { TestBed } from '@angular/core/testing';

import { Comp1Service } from './comp1.service';

describe('Comp1Service Real', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({})
    });

  it('should be created', () => {
    const service: Comp1Service = TestBed.get(Comp1Service);
    expect(service).toBeTruthy();
  });

  it('getRandom', () => {
    const service: Comp1Service = TestBed.get(Comp1Service);
    expect(service.getRandom(10)).toBeGreaterThanOrEqual(0)
  })
});

describe('Comp1Service Fake', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                { 
                    provide: Comp1Service,
                    useValue: {
                        response: 3,
                        getRandom(value) {
                            return this.response
                        }
                    }
                }
            ]
        })
    });

  it('should be created', () => {
    const service: Comp1Service = TestBed.get(Comp1Service);
    expect(service).toBeTruthy();
  });

  it('getRandomFake', () => {
    const service: Comp1Service = TestBed.get(Comp1Service)
    expect(service.getRandom(10)).toBe(3)
  })

  it('getRandomFake2', () => {
    TestBed.get(Comp1Service).response = 5
    const service: Comp1Service = TestBed.get(Comp1Service)
    expect(service.getRandom(10)).toBe(5)
  })
});
