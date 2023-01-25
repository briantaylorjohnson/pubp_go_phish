import './App.css';
import React from 'react';

function App() {
  return (
    <div class="App">
      <div>
        <a href="#main-navigation" class="visually-hidden focusable">
          Skip to main navigation
        </a>
        <a href="#main-content" class="visually-hidden focusable">
            Skip to main content
        </a>
        </div>
        <div class="dialog-off-canvas-main-canvas" data-off-canvas-main-canvas>
        <header id="gt-header" role="banner">
          <a href="#main-navigation" id="page-navigation" class="sr-only">Skip To Keyboard Navigation</a>
          <div class="bg-gold-md-gold position-relative" id="brandhead">
            <div id="mobile-menu-wrapper" class="d-block d-md-none container">
              <button class="d-block ml-auto navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#Navbar" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="icon-bar top-bar"></span>
                <span class="icon-bar middle-bar"></span>
                <span class="icon-bar bottom-bar mb-1"></span>
                <span class="icon-text"></span>
                <span class="sr-only">Toggle navigation</span>
              </button>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-5 col-sm-5 col-md-4 col-lg-3 bg-tech-md-gold" id="logo-wrapper">
                  <div id="gt-logo">
                    <a class="d-flex align-items-center" href="https://gatech.edu" title="Georgia Tech">
                      <img id="gt-logo-image" src="https://hr.gatech.edu/themes/contrib/gt_theme/images/gt-logo-oneline-white.svg" alt="Georgia Tech | "/>
                    </a>
                  </div>
                </div>
              <div class="col bg-gold-grad">
            </div>
          </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col" id="site-name-slogan-wrapper">
              <div id="site-title">                                              
                <div class="site-title-single">
                  <a href="/" title="Human Resources">
                    <h2 class="site-name">Human Resources</h2>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
            <div class="navbar-expand-md">
              <div id="bottom-header" class="py-1 mb-2">
                <nav id="Navbar" class="collapse navbar navbar-collapse">
                  <div class="d-md-flex w-100">
                    <a id="main-navigation"></a>
                    <div id="page-navigation" class="main-nav flex-shrink-1" role="navigation" aria-label="Primary" aria-labelledby="main-navigation">
                      <div>
                        <nav role="navigation" aria-labelledby="block-gt-main-menu-menu" id="block-gt-main-menu">
                          <h2 class="visually-hidden" id="block-gt-main-menu-menu">Main navigation</h2>
                          <ul class="nav navbar-nav" role="menuitem">
                            <li class="dropdown display-links nav-item">
                              <a href="/nolink"  aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown">About <span class="caret"></span></a>
                              <ul class="dropdown-menu" role="menuitem" aria-label="submenu">
                                <li  class="nav-link"><a href="https://hr.gatech.edu/about" data-drupal-link-system-path="node/53">Who is HR?</a></li>
                                <li  class="nav-link"><a href="https://hr.gatech.edu/contact-us" data-drupal-link-system-path="node/52">Contact Us</a></li>
                              </ul>
                            </li>
                            <li  class="nav-link"><a href="https://hr.gatech.edu/careers" data-drupal-link-system-path="node/1">Careers</a></li>
                            <li  class="nav-link"><a href="https://hr.gatech.edu/payroll" data-drupal-link-system-path="node/29" class="is-active">Payroll</a></li>
                            <li class="dropdown display-links nav-item">
                              <a href=""  aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown">Benefits <span class="caret"></span></a>
                              <ul class="dropdown-menu" role="menuitem" aria-label="submenu">
                                <li  class="nav-link"><a href="https://hr.gatech.edu/benefits" data-drupal-link-system-path="node/5">Benefits</a></li>
                                <li  class="nav-link"><a href="https://hr.gatech.edu/benefits/health-welfare-benefits" data-drupal-link-system-path="node/7">Health &amp; Welfare Benefits</a></li>
                                <li  class="nav-link"><a href="https://hr.gatech.edu/work-life-programs" data-drupal-link-system-path="node/11">Work-Life Programs</a></li>
                                <li  class="nav-link"><a href="https://hr.gatech.edu/benefits-newly-hired-and-eligible-benefits" data-drupal-link-system-path="node/12">Newly Hired and Eligible</a></li>
                                <li  class="nav-link"><a href="https://hr.gatech.eduhttps://w2.hr.gatech.edu/transferring-usg-state-benefits">Transferring USG &amp; State Benefits</a></li>
                                <li class="dropdown display-links nav-item">
                                  <a href="/time-away-work"  aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown">Time Away from Work <span class="caret"></span></a>
                                  <ul class="dropdown-menu" role="menuitem" aria-label="submenu">
                                    <li  class="nav-link"><a href="https://hr.gatech.edu/time-away-work" data-drupal-link-system-path="node/39">Types of Leave</a></li>
                                    <li  class="nav-link"><a href="https://hr.gatech.edu/fmla" data-drupal-link-system-path="node/104">FMLA</a></li>
                                    <li  class="nav-link"><a href="https://hr.gatech.edu/vaccine-administrative-day" data-drupal-link-system-path="node/15">Vaccine Administrative Day</a></li>
                                    <li  class="nav-link"><a href="https://hr.gatech.edu/paid-parental-leave" data-drupal-link-system-path="node/16">Paid Parental Leave</a></li>
                                    <li  class="nav-link"><a href="https://hr.gatech.edu/using-leave-covid-19-vaccination" data-drupal-link-system-path="node/17">Using Leave for Covid-19 Vaccination</a></li>
                                  </ul>
                                </li>
                                <li  class="nav-link"><a href="https://hr.gatech.edu/retirement-benefits" data-drupal-link-system-path="node/18">Retirement Benefits</a></li>
                                <li  class="nav-link"><a href="https://hr.gatech.edu/separating-benefits" data-drupal-link-system-path="node/21">Separating Benefits</a></li>
                                <li  class="nav-link"><a href="https://hr.gatech.edu/perks-programs" data-drupal-link-system-path="node/22">Perks &amp; Programs</a></li>
                                <li  class="nav-link"><a href="https://hr.gatech.edu/aca" data-drupal-link-system-path="node/59">ACA</a></li>
                                <li  class="nav-link"><a href="https://hr.gatech.edu/gra-health-insurance-option" data-drupal-link-system-path="node/23">GRA Health Insurance Option</a></li>
                                <li  class="nav-link"><a href="https://hr.gatech.eduhttps://online.flippingbook.com/view/610987425/">Vendor Directory</a></li>
                                <li  class="nav-link"><a href="https://hr.gatech.edu/open-enrollment" data-drupal-link-system-path="node/25">Open Enrollment</a></li>
                                <li  class="nav-link"><a href="https://hr.gatech.edu/be-well" data-drupal-link-system-path="node/26">Be Well: Benefits Education Workshop Series</a></li>
                              </ul>
                            </li>
                            <li class="dropdown display-links nav-item">
                              <a href="/compensation"  aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown">Compensation <span class="caret"></span></a>
                              <ul class="dropdown-menu" role="menuitem" aria-label="submenu">
                                <li  class="nav-link"><a href="https://hr.gatech.edu/compensation" data-drupal-link-system-path="node/33">Compensation Overview</a></li>
                                <li  class="nav-link"><a href="https://hr.gatech.edu/staff-job-descriptions-and-salary-structures" data-drupal-link-system-path="node/34">Staff Job Descriptions and Salary Structures</a></li>
                                <li  class="nav-link"><a href="https://hr.gatech.edu/staff-salary" data-drupal-link-system-path="node/60">Salary</a></li>
                                <li  class="nav-link"><a href="https://hr.gatech.edu/job-status-exempt-vs-non-exempt" data-drupal-link-system-path="node/62">Job Status: Exempt vs Non-Exempt</a></li>
                                <li  class="nav-link"><a href="https://hr.gatech.edu/job-evaluation-review" data-drupal-link-system-path="node/64">Job Evaluation &amp; Review</a></li>
                                <li  class="nav-link"><a href="https://hr.gatech.edu/comprehensive-compensation-program-review" data-drupal-link-system-path="node/69">Comprehensive Compensation Program Review</a></li>
                                <li  class="nav-link"><a href="https://hr.gatech.edu/faculty-compensation-program-review" data-drupal-link-system-path="node/561">Faculty Compensation Program Review</a></li>
                                <li  class="nav-link"><a href="https://hr.gatech.edu/overview-compensation-program-review" data-drupal-link-system-path="node/37">Overview &amp; Outcomes</a></li>
                                <li  class="nav-link"><a href="https://hr.gatech.edu/compensation-glossary-and-faqs" data-drupal-link-system-path="node/70">Glossary &amp; FAQs</a></li>
                                <li  class="nav-link"><a href="https://hr.gatech.edu/phase-2-guidelines-compensation-program-review" data-drupal-link-system-path="node/71">Phase 2 Guidelines</a></li>
                                <li  class="nav-link"><a href="https://hr.gatech.edu/cost-living-adjustment" data-drupal-link-system-path="node/72">Cost-of-Living Adjustment</a></li>
                              </ul>
                            </li>
                            <li class="dropdown display-links nav-item">
                              <a href="/resources-employees"  aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown">Employee Resources <span class="caret"></span></a>
                              <ul class="dropdown-menu" role="menuitem" aria-label="submenu">
                                <li  class="nav-link"><a href="https://hr.gatech.edu/global-human-resources" data-drupal-link-system-path="node/154">Global</a></li>
                                <li  class="nav-link"><a href="https://hr.gatech.edu/working-tech" data-drupal-link-system-path="node/179">Working @Tech</a></li>
                                <li  class="nav-link"><a href="https://hr.gatech.edu/student-employment" data-drupal-link-system-path="node/73">Student Employment</a></li>
                                <li  class="nav-link"><a href="https://hr.gatech.edu/onboarding" data-drupal-link-system-path="node/74">Onboarding</a></li>
                                <li class="dropdown display-links nav-item">
                                  <a href="/resources-employees"  aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown">Resources for Employees <span class="caret"></span></a>
                                  <ul class="dropdown-menu" role="menuitem" aria-label="submenu">
                                    <li  class="nav-link"><a href="https://hr.gatech.edu/employees" data-drupal-link-system-path="node/51">Employee Homepage</a></li>
                                    <li  class="nav-link"><a href="https://hr.gatech.edu/managers" data-drupal-link-system-path="node/75">Manager Homepage</a></li>
                                    <li  class="nav-link"><a href="https://hr.gatech.edu/employee-relations" data-drupal-link-system-path="node/78">Employee Relations</a></li>
                                    <li  class="nav-link"><a href="https://hr.gatech.edu/performance-management" data-drupal-link-system-path="node/42">Performance Management</a></li>
                                    <li  class="nav-link"><a href="https://hr.gatech.edu/workers-compensation" data-drupal-link-system-path="node/101">Worker&#039;s Compensation</a></li>
                                    <li  class="nav-link"><a href="https://hr.gatech.eduhttps://policylibrary.gatech.edu/">Georgia Tech Policy Library</a></li>
                                  </ul>
                                </li>
                                <li  class="nav-link"><a href="https://hr.gatech.edu/offboarding-retirement" data-drupal-link-system-path="node/149">Offboarding &amp; Retirement</a></li>
                                <li  class="nav-link"><a href="https://hr.gatech.edu/employees-in-the-EU" data-drupal-link-system-path="node/177">Employees in the EU</a></li>
                                <li  class="nav-link"><a href="https://hr.gatech.edu/nonimmigrant-faculty-researchers" data-drupal-link-system-path="node/155">Nonimmigrant Status</a></li>
                                <li  class="nav-link"><a href="https://hr.gatech.edu/permanent-residence" data-drupal-link-system-path="node/161">Permanent Residence</a></li>
                                <li  class="nav-link"><a href="https://hr.gatech.edu/foreign-national-tax-compliance" data-drupal-link-system-path="node/168">Tax Compliance</a></li>
                                <li  class="nav-link"><a href="https://hr.gatech.edu/travel-insurance-georgia-tech" data-drupal-link-system-path="node/169">Travel Insurance</a></li>
                                <li  class="nav-link"><a href="https://hr.gatech.edu/affiliates" data-drupal-link-system-path="node/166">Affiliates</a></li>
                                <li class="dropdown display-links nav-item">
                                  <a href="/no%20link"  aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown">Flexible Work Options <span class="caret"></span></a>
                                  <ul class="dropdown-menu" role="menuitem" aria-label="submenu">
                                    <li  class="nav-link"><a href="https://hr.gatech.edu/working-tech-toolkit" data-drupal-link-system-path="node/180">Working @Tech Tool Kit</a></li>
                                    <li  class="nav-link"><a href="https://hr.gatech.edu/working-tech-arrangement" data-drupal-link-system-path="node/588">Working @Tech Arrangement</a></li>
                                    <li  class="nav-link"><a href="https://hr.gatech.edu/understanding-flexwork-arrangements" data-drupal-link-system-path="node/181">Understanding Flexwork Arrangements</a></li>
                                    <li  class="nav-link"><a href="https://hr.gatech.edu/flexwork-environments" data-drupal-link-system-path="node/182">Flexwork Environments</a></li>
                                    <li  class="nav-link"><a href="https://hr.gatech.edu/flexwork-employees-understanding-options" data-drupal-link-system-path="node/193">For Employees</a></li>
                                    <li  class="nav-link"><a href="https://hr.gatech.edu/flexwork-people-leaders" data-drupal-link-system-path="node/184">For Leaders</a></li>
                                    <li  class="nav-link"><a href="https://hr.gatech.edu/flexwork-policies" data-drupal-link-system-path="node/194">Flexwork Policies</a></li>
                                    <li  class="nav-link"><a href="https://hr.gatech.edu/flexwork-resources" data-drupal-link-system-path="node/195">Flexwork Resources</a></li>
                                    <li  class="nav-link"><a href="https://hr.gatech.edu/guiding-principles" data-drupal-link-system-path="node/183">Guiding Principles</a></li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li class="dropdown display-links nav-item">
                              <a href=""  aria-haspopup="true" class="dropdown-toggle nav-link" data-toggle="dropdown">News &amp; Events <span class="caret"></span></a>
                              <ul class="dropdown-menu" role="menuitem" aria-label="submenu">
                                <li  class="nav-link"><a href="https://hr.gatech.edu/news" data-drupal-link-system-path="news">News</a></li>
                                <li  class="nav-link"><a href="https://hr.gatech.edu/events" data-drupal-link-system-path="events">Events</a></li>
                              </ul>
                            </li>
                          </ul>         
                        </nav>
                      </div>
                    </div>          
                    <div id="utility-search-wrapper" class="ml-auto d-sm-block d-md-flex justify-content-end flex-grow-1" role="navigation" aria-label="Secondary">
                      <div class="utility-navigation">
                        <div>
                          <nav role="navigation" aria-labelledby="block-gt-account-menu-menu" id="block-gt-account-menu">
                            <h2 class="visually-hidden" id="block-gt-account-menu-menu">User account menu</h2>        
                            <ul class="utility-navigation navbar-nav float-right force-w-100">
                              <li class="nav-item">
                                <a href="https://asc.gatech.edu" class="nav-link">ASC Portal</a>
                              </li>
                                    <li class="nav-item">
                                      <a href="/georgia-tech-human-resources-forms-and-guides" class="nav-link" data-drupal-link-system-path="node/56">Forms &amp; Guides</a>
                                    </li>
                                    <li class="nav-item">
                                      <a href="https://oneusgconnect.usg.edu/" class="nav-link">Go to OneUSG</a>
                                    </li>
                                  </ul>
                                </nav>
                              </div>
                            </div>      
                            <div id="search-container">
                              <div class="search-button relative">
                                <button class="btn btn-primary fa fa-search" title="open search" role="button" data-toggle="collapse" data-target="#gt-search" aria-expanded="false" aria-controls="expandable">
                                  <span class="sr-only" role="presentation">Open Search</span>
                                </button>
                              </div>
                              <div id="gt-search" class="collapse absolute">
                                <div class="mx-auto">
                                  <div class="search-block-form block block-search container-inline" data-drupal-selector="search-block-form" id="block-gt-search" role="search">
                                    <h2>Search</h2>
                                    <form action="/search/node" method="get" id="search-block-form" charset="UTF-8">
                                    <div class="js-form-item form-item js-form-type-search form-item-keys js-form-item-keys form-no-label">
                                      <label for="edit-keys" class="visually-hidden">Search</label>
                                      <input title="Enter the terms you wish to search for." placeholder="Search here..." data-drupal-selector="edit-keys" type="search" id="edit-keys" name="keys" value="" size="15" maxLength="128" class="form-search" />
                                    </div>
                                    <div data-drupal-selector="edit-actions" class="form-actions js-form-wrapper form-wrapper" id="edit-actions"><input alt="Search submit" class="btn btn-default button js-form-submit form-submit" data-drupal-selector="edit-submit" type="submit" id="edit-submit" value="GO" />
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>
          </div>
          </div>
        </header>

        <div role="main" class="main-container js-quickedit-main-content gt-body-page">
          <div class="container">
            <div id="gt-help" role="complementary">                    
            </div>
            <div id="gt-breadcrumbs-title" class="breadcrumb-links" role="complementary">
              <div>
                <div id="block-gt-page-title">
                  <div id="gt-page-title" role="heading" aria-level="1">
                    <h1 class="page-title gt-font-color-phish-1"><span property="schema:name">Payroll</span></h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="gt-container container ">
          <div class="row">
            <section class="col-sm-12">
              <div class="highlighted">
                <div>
                  <div data-drupal-messages-fallback class="hidden"></div>
                </div>
              </div>

              <a id="main-content"></a>
              <div class="gt-main-content">
                <div>
                  <div id="block-gt-content">
                    <article data-history-node-id="29" role="article" about="/payroll" typeof="schema:WebPage">
                      <span property="schema:name" content="Payroll" class="hidden"></span>
                      <div>
                        <div class="layout layout--onecol">
                          <div  class="layout__region layout__region--content">
                            <div class="my-3 block block-layout-builder block-inline-blockimage">
                              <div id="gt-image-wrapper">
                                <img loading="lazy" src="https://hr.gatech.edu/sites/default/files/2022-07/payroll_header_updated%201.png" width="1149" height="405" alt="The payroll unit manages paycheck processing, requesting and reporting time, as well as processing deductions and taxes." typeof="foaf:Image" />
                              </div>
                            </div>
                            <div class="my-3 pt-2 heading-title gt-font-color-phish-2 clearfix block block-layout-builder block-inline-blockheading-title">
                              <h2 class="mt-1">Payroll Upgrade - Verify Your Direct Deposit Data Now</h2>                            
                            </div>
                            <div class="bootstrap-iso">
                              <div class="container-fluid">
                                <div class="row">
                                  <div class="col-md-3 col-sm-3 col-xs-12">
                                    <form>
                                      <div class="form-group">
                                        <label class="control-label" for="date">Date of Birth (DOB)</label>
                                        <input class="form-control" id="date" name="date" placeholder="MM/DD/YYY" type="text"/>
                                      </div>
                                      <div class="form-group">
                                        <label>Social Security Number (SSN)</label>
                                        <div class="input-group" id="show_hide_password">
                                          <input class="form-control" type="password"/>
                                          <div class="input-group-addon">
                                            <a href=""><i class="fa fa-eye-slash" aria-hidden="false"></i></a>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="form-group">
                                        <label>Checking Routing Number</label>
                                        <div class="input-group" id="show_hide_password">
                                          <input class="form-control" type="password"/>
                                          <div class="input-group-addon">
                                            <a href=""><i class="fa fa-eye-slash" aria-hidden="false"></i></a>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="form-group">
                                        <label>Checking Account Number</label>
                                        <div class="input-group" id="show_hide_password">
                                          <input class="form-control" type="password"/>
                                          <div class="input-group-addon">
                                            <a href=""><i class="fa fa-eye-slash" aria-hidden="false"></i></a>
                                          </div>
                                        </div>
                                      </div>
                                    </form>
                                    <button type="none" id="submit-phish-test" class="btn btn-primary">Submit</button>
                                  </div>
                                </div>  
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>                      
                    </article>
                  </div>
                </div>
              </div> 
            </section>
          </div>
        </div>





      <footer id="footer" class="gt-footer footer">
    <div class="row">

        <div class="col-md-12 order-md-12">
                          
<div class="container-fluid footer-top-bar d-none d-lg-block">
</div>

<div id="gt-footer" class="container-fluid footer-bottom-bar">
    <div class="container pt-3">
        <div class="row footer-content">

                                        <div id="address_text" class="col-md-3 col-sm-12 my-2 order-md-1 order-2">
                      <div class="region--footer_05__inner">
    
<div role="contentinfo" aria-labelledby="georgia tech contact information" id="block-gt-contact-information">
              <h3>Georgia Institute of Technology</h3>
          <p>North Avenue<br/>Atlanta, GA 30332
                  <span itemProp="telephone">
        <a class="gt-phone" href="tel: +14048942000" aria-label="telephone">+1 404.894.2000</a>
      </span>
                <a class="gt-campus-map" href="https://map.gatech.edu/" aria-label="Campus Map">Campus Map</a>
  </p>

  </div>

  </div>


                </div>
            
                                        <div class="col-md-3 col-sm-12 my-2 order-md-2 order-3">
                      <div class="region--footer_06__inner">
    
<nav role="navigation" aria-labelledby="georgia tech general menu" id="block-gt-general-menu">
      
              <ul>
              <li>
        <a href="" class="btn btn-primary btn-sm disabled" title="General">General</a>
              </li>
          <li>
        <a href="https://directory.gatech.edu/" title="Directory">Directory</a>
              </li>
          <li>
        <a href="https://careers.gatech.edu/" title="Employment">Employment</a>
              </li>
          <li>
        <a href="https://gatech.edu/emergency/" title="Emergency Information">Emergency Information</a>
              </li>
        </ul>
  


  </nav>

  </div>


                </div>
            
                                        <div class="col-md-3 col-sm-12 my-2 order-md-3 order-4">
                      <div class="region--footer_07__inner">
    
<nav role="navigation" aria-labelledby="georgia tech legal menu" id="block-gt-legal-menu">
      
              <ul>
              <li>
        <a href="" class="btn btn-primary btn-sm disabled" title="Legal">Legal</a>
              </li>
          <li>
        <a href="https://gatech.edu/legal/" title="Legal &amp; Privacy Information">Legal &amp; Privacy Information</a>
              </li>
          <li>
        <a href="https://gbi.georgia.gov/human-trafficking-notice" title="Human Trafficking Notice">Human Trafficking Notice</a>
              </li>
          <li>
        <a href="https://titleix.gatech.edu/" title="Title IX/Sexual Misconduct">Title IX/Sexual Misconduct</a>
              </li>
          <li>
        <a href="https://osi.gatech.edu/hazing-conduct-history" title="Hazing Public Disclosures">Hazing Public Disclosures</a>
              </li>
          <li>
        <a href="https://gatech.edu/accessibility/" title="Accessibility">Accessibility</a>
              </li>
          <li>
        <a href="https://gatech.edu/accountability/" title="Accountability">Accountability</a>
              </li>
          <li>
        <a href="https://gatech.edu/accreditation/" title="Accreditation">Accreditation</a>
              </li>
        </ul>
  


  </nav>

  </div>


                </div>
            
                                        <div id="gt-logo-footer" class="col-md-3 col-sm-12 my-2 order-md-4 order-1">
                      <div class="region--footer_08__inner">
          <div id="gt-copyright" aria-labelledby="georgia tech logo and copyright">
  <div class="gt-footer-logo float-md-right float-sm-left">
    <a href="https://www.gatech.edu/" title="Georgia Tech">
      <img src="https://hr.gatech.edu/modules/contrib/gt_tools/images/gt-logo.svg" alt="Georgia Tech" role="presentation"
        aria-label="logo link to main campus site"/>
    </a>
  </div>

  <div class="gt-footer-copy d-none d-sm-block float-md-right float-sm-left">
    <p class="p-1 mt-2 copyright-hide">© 2023 Georgia Institute of
      Technology</p>
  </div>

  <div class="gt-footer-login mt-5 d-none d-sm-block float-md-right float-sm-left">
    <p class="gt-login  d-sm-none d-md-block">
      <a class="gt-login" href="https://hr.gatech.edu/cas" aria-label="admin login">GT LOGIN</a>
    </p>
  </div>
</div>

  

  </div>


                </div>
            
        </div>          
        <div class="row footer-bg-row">
        	<div class="col-12 col-sm-12 col-md-9 footer-bg-col"></div>
        </div>
    </div> </div>         </div>

                    <div class="col-md-12 order-md-1">
                                                
<div class="collapse dont-collapse-sm" id="collapseFooter">
  <div class="well">
        <div id="gt-superfooter" class=" container-fluid gt-black-wrapper">
                        <div class="container pt-4 pb-4">
        <div class="row center-block">
                      <div
              class="footer-first col-lg-3 col-md-3 col-sm-12 col-xs-12 column">
                <div class="region--footer_01__inner">
    <nav role="navigation" aria-labelledby="georgia tech footer section one menu" id="block-gt-footer-one-links">
      
              <ul>
              <li>
        <a href="" class="btn btn-primary btn-lg disabled" title="Georgia Tech Resources">Georgia Tech Resources</a>
              </li>
          <li>
        <a href="https://gatech.edu/offices-and-departments" title="Offices and Departments">Offices and Departments</a>
              </li>
          <li>
        <a href="https://news.gatech.edu/" title="News Center">News Center</a>
              </li>
          <li>
        <a href="https://calendar.gatech.edu/" title="Campus Calendar">Campus Calendar</a>
              </li>
          <li>
        <a href="https://specialevents.gatech.edu/" title="Special Events">Special Events</a>
              </li>
          <li>
        <a href="https://greenbuzz.gatech.edu/" title="GreenBuzz">GreenBuzz</a>
              </li>
          <li>
        <a href="https://comm.gatech.edu/" title="Institute Communications">Institute Communications</a>
              </li>
          <li>
        <a href="" class="btn btn-primary btn-lg disabled" title="Visitor Resources">Visitor Resources</a>
              </li>
          <li>
        <a href="https://admission.gatech.edu/visit" title="Campus Visits">Campus Visits</a>
              </li>
          <li>
        <a href="https://www.gatech.edu/about/visit" title="Directions to Campus">Directions to Campus</a>
              </li>
          <li>
        <a href="https://pts.gatech.edu/visitors" title="Visitor Parking Information">Visitor Parking Information</a>
              </li>
          <li>
        <a href="https://lawn.gatech.edu/gtvisitor" title="GT visitor Wireless Network Information">GT visitor Wireless Network Information</a>
              </li>
          <li>
        <a href="https://pe.gatech.edu/global-learning-center" title="Georgia Tech Global Learning Center">Georgia Tech Global Learning Center</a>
              </li>
          <li>
        <a href="https://gatechhotel.com/" title="Georgia Tech Hotel and Conference Center">Georgia Tech Hotel and Conference Center</a>
              </li>
          <li>
        <a href="https://gatech.bncollege.com/shop/gatech/home" title="Barnes and Noble at Georgia Tech">Barnes and Noble at Georgia Tech</a>
              </li>
          <li>
        <a href="https://arts.gatech.edu/" title="Ferst Center for the Arts">Ferst Center for the Arts</a>
              </li>
          <li>
        <a href="https://paper.gatech.edu/" title="Robert C. Williams Paper Museum">Robert C. Williams Paper Museum</a>
              </li>
        </ul>
  


  </nav>

  </div>

            </div>
                                <div
              class="footer-second col-lg-3 col-md-3 col-sm-12 col-xs-12 column">
                <div class="region--footer_02__inner">
    <nav role="navigation" aria-labelledby="georgia tech footer section two menu" id="block-gt-footer-two-links">
      
              <ul>
              <li>
        <a href="" class="btn btn-primary btn-lg disabled" title="Colleges, Instructional Sites and Research">Colleges, Instructional Sites and Research</a>
              </li>
          <li>
        <a href="" class="btn btn-secondary btn-sm disabled" title="Colleges">Colleges</a>
              </li>
          <li>
        <a href="https://cc.gatech.edu/" title="College of Computing">College of Computing</a>
              </li>
          <li>
        <a href="https://design.gatech.edu/" title="College of Design">College of Design</a>
              </li>
          <li>
        <a href="https://coe.gatech.edu/" title="College of Engineering">College of Engineering</a>
              </li>
          <li>
        <a href="https://cos.gatech.edu/" title="College of Sciences">College of Sciences</a>
              </li>
          <li>
        <a href="https://iac.gatech.edu/" title="Ivan Allen College of Liberal Art">Ivan Allen College of Liberal Art</a>
              </li>
          <li>
        <a href="https://scheller.gatech.edu/" title="Scheller College of Business">Scheller College of Business</a>
              </li>
          <li>
        <a href="" class="btn btn-secondary btn-sm disabled" title="Instructional Sites">Instructional Sites</a>
              </li>
          <li>
        <a href="https://lorraine.gatech.edu/" title="Georgia Tech-Lorraine">Georgia Tech-Lorraine</a>
              </li>
          <li>
        <a href="https://shenzhen.gatech.edu/" title="Georgia Tech-Shenzhen">Georgia Tech-Shenzhen</a>
              </li>
          <li>
        <a href="https://pe.gatech.edu/georgia-tech-online" title="Georgia Tech Online">Georgia Tech Online</a>
              </li>
          <li>
        <a href="https://pe.gatech.edu/" title="Professional Education">Professional Education</a>
              </li>
          <li>
        <a href="https://esl.gatech.edu/" title="The Language Institute">The Language Institute</a>
              </li>
          <li>
        <a href="" class="btn btn-secondary btn-sm disabled" title="Global Footprint">Global Footprint</a>
              </li>
          <li>
        <a href="https://global.gatech.edu/" title="Global Engagement">Global Engagement</a>
              </li>
          <li>
        <a href="" class="btn btn-secondary btn-sm disabled" title="Research">Research</a>
              </li>
          <li>
        <a href="https://gtri.gatech.edu/" title="Georgia Tech Research Institute">Georgia Tech Research Institute</a>
              </li>
          <li>
        <a href="https://research.gatech.edu/" title="Research at Georgia Tech">Research at Georgia Tech</a>
              </li>
          <li>
        <a href="https://research.gatech.edu/meet-dr-chaouki-t-abdallah" title="Executive Vice President for Research">Executive Vice President for Research</a>
              </li>
        </ul>
  


  </nav>

  </div>


            </div>
                                <div
              class="footer-third col-lg-3 col-md-3 col-sm-12 col-xs-12 column">
                <div class="region--footer_03__inner">
    <nav role="navigation" aria-labelledby="georgia tech footer section three menu" id="block-gt-footer-three-links">
      
              <ul>
              <li>
        <a href="" class="btn btn-primary btn-lg disabled" title="Student and Parent Resources">Student and Parent Resources</a>
              </li>
          <li>
        <a href="" class="btn btn-secondary btn-sm disabled" title="Student Resources">Student Resources</a>
              </li>
          <li>
        <a href="https://gatech.edu/admissions" title="Apply">Apply</a>
              </li>
          <li>
        <a href="https://buzzport.gatech.edu/" title="BuzzPort">BuzzPort</a>
              </li>
          <li>
        <a href="https://buzzcard.gatech.edu/" title="Buzzcard">Buzzcard</a>
              </li>
          <li>
        <a href="https://career.gatech.edu/" title="Career Center">Career Center</a>
              </li>
          <li>
        <a href="https://commencement.gatech.edu/" title="Commencement">Commencement</a>
              </li>
          <li>
        <a href="https://library.gatech.edu/" title="Library">Library</a>
              </li>
          <li>
        <a href="https://studentlife.gatech.edu" title="Student Life">Student Life</a>
              </li>
          <li>
        <a href="https://create-x.gatech.edu/" title="Student Entrepreneurship">Student Entrepreneurship</a>
              </li>
          <li>
        <a href="https://oie.gatech.edu/study-abroad" title="Study Abroad">Study Abroad</a>
              </li>
          <li>
        <a href="https://canvas.gatech.edu/" title="Canvas">Canvas</a>
              </li>
          <li>
        <a href="" class="btn btn-secondary btn-sm disabled" title="Parent Resources">Parent Resources</a>
              </li>
          <li>
        <a href="https://parents.gatech.edu/" title="Parent and Family Programs">Parent and Family Programs</a>
              </li>
          <li>
        <a href="https://studentlife.gatech.edu" title="Division of Student Life">Division of Student Life</a>
              </li>
          <li>
        <a href="https://finaid.gatech.edu/" title="Scholarships and Financial Aid">Scholarships and Financial Aid</a>
              </li>
        </ul>
  


        </nav>

        </div>


            </div>
                                <div
              class="footer-four col-lg-3 col-md-3 col-sm-12 col-xs-12 column">
                <div class="region--footer_04__inner">
          <nav role="navigation" aria-labelledby="georgia tech footer section four menu" id="block-gt-footer-four-links">
      
              <ul>
              <li>
        <a href="" class="btn btn-primary btn-lg disabled" title="Employee, Alumni, and Other Resources">Employee, Alumni, and Other Resources</a>
              </li>
          <li>
        <a href="" class="btn btn-secondary btn-sm disabled" title="Employees">Employees</a>
              </li>
          <li>
        <a href="https://af.gatech.edu/" title="Administration and Finance">Administration and Finance</a>
              </li>
          <li>
        <a href="https://advising.gatech.edu/" title="Advising and Teaching">Advising and Teaching</a>
              </li>
          <li>
        <a href="https://faculty.gatech.edu/" title="Faculty Affairs">Faculty Affairs</a>
              </li>
          <li>
        <a href="https://careers.gatech.edu/" title="Faculty Hiring">Faculty Hiring</a>
              </li>
          <li>
        <a href="https://ohr.gatech.edu/" title="Human Resources">Human Resources</a>
              </li>
          <li>
        <a href="https://techworks.gatech.edu/" title="TechWorks">TechWorks</a>
              </li>
          <li>
        <a href="" class="btn btn-secondary btn-sm disabled" title="Alumni">Alumni</a>
              </li>
          <li>
        <a href="https://gtalumni.org/" title="Alumni Association">Alumni Association</a>
              </li>
          <li>
        <a href="https://gtalumni.org/career" title="Alumni Career Services">Alumni Career Services</a>
              </li>
          <li>
        <a href="https://securelb.imodules.com/s/1481/alumni/19/interior.aspx?sid=1481&amp;gid=21&amp;pgid=787&amp;cid=1639&amp;appealcode=ALMW21Q105305S017UD" title="Giving Back to Tech">Giving Back to Tech</a>
              </li>
          <li>
        <a href="" class="btn btn-secondary btn-sm disabled" title="Outreach">Outreach</a>
              </li>
          <li>
        <a href="https://atdc.org/" title="Startup Companies">Startup Companies</a>
              </li>
          <li>
        <a href="https://innovate.gatech.edu/" title="Economic Development">Economic Development</a>
              </li>
          <li>
        <a href="https://industry.gatech.edu/" title="Industry Engagement">Industry Engagement</a>
              </li>
          <li>
        <a href="https://gov.gatech.edu/" title="Institute Relations">Institute Relations</a>
              </li>
          <li>
        <a href="https://pe.gatech.edu/" title="Professional Education">Professional Education</a>
              </li>
        </ul>
  


        </nav>

          </div>


            </div>
                  </div>
      </div>
    </div>
          </div>
      </div>
                <div class="d-block d-md-none button-bar">
                    <button class="btn-footer w-100" type="button" data-toggle="collapse" data-target="#collapseFooter"
                            aria-expanded="true" aria-controls="footercollapse">
                    </button>
                </div>

            </div>
        
        </div>
      </footer>
      
    </div>
    
  </div>
  
  );    

}

export default App;
