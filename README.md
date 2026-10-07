# ServiceNow ITSM & CMDB Project

A self-directed project built on a ServiceNow Personal Developer Instance (PDI), extending a core ITSM setup (Incident Management, Service Catalog, SLA tracking) with CMDB — Configuration Items linked to incidents, with automated escalation based on CI status.

## What this project does

1. **Configuration Items (CMDB)** — Created sample CI records (servers, applications, a network device) representing a small IT inventory.
2. **Incident-to-CI linking** — Incidents are linked to the specific CI they relate to, instead of existing as unconnected tickets.
3. **Automated escalation (Business Rule)** — A Business Rule on the Incident table checks the linked CI's operational status. If the CI is Non-Operational, the incident's Urgency is automatically raised and a work note is added — without manual intervention.
4. **Reporting** — A report groups incidents by Configuration Item, giving a summary view of incident volume per CI.

## Example walkthrough

- CI `WEB-SRV-01` is set to **Non-Operational**.
- A new incident, "Server not responding," is created and linked to `WEB-SRV-01`.
- On save, the Business Rule automatically:
  - Sets **Urgency** to `1 - High`
  - Adds a **work note**: *"Linked CI (WEB-SRV-01) is currently non-operational. Priority escalated automatically."*
- The same incident linked to an **Operational** CI (e.g., `HR Portal`) is left unchanged — confirming the rule only acts when genuinely needed.

## Files in this repo

- `flag-incident-if-ci-not-operational.js` — the Business Rule script
- `ci-records.png`, `incident-linked-to-ci.png`, `incident-after-automation.png` — screenshots

## What I learned

- How CMDB relationships (`current.cmdb_ci`) are referenced inside server-side scripts via dot-walking
- The difference between data existing on a record versus a system reacting to that data
- Debugging a Business Rule that initially appeared not to fire, by isolating whether the issue was the rule logic or the record save itself

## Notes

This is a self-directed learning project on a personal developer instance, not production or client work.
